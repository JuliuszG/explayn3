const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const serviceTemplate = path.resolve(`src/templates/servicesTemplate.js`)
  const caseTemplate = path.resolve(`src/templates/caseTemplate.js`)
  const result = await graphql(`
  query MyQuery {
    allDatoCmsServicepage {
      nodes {
        firstComponent
        secondComponent
        thirdComponent
        slug
        serviceLogo {
            fluid {
                base64
                aspectRatio
                src
                srcSet
                sizes
            }
        }
      }
    }
    allDatoCmsRealizacja {
      nodes {
        id,
        slug
      }
    }
  }
`)
    result.data.allDatoCmsServicepage.nodes.forEach(project => {
      createPage({
        path: `/${ project.slug }`,
        component: serviceTemplate,
        context: {
            first: JSON.parse(project.firstComponent),
            second: JSON.parse(project.secondComponent),
            third: JSON.parse(project.thirdComponent),
            logo: project.serviceLogo.fluid
        },
      })
    })
    result.data.allDatoCmsRealizacja.nodes.forEach(project => {
      createPage({
        path: `case/${ project.slug }`,
        component: caseTemplate,
        context: {
            id: project.id
        },
      })
    })
  }