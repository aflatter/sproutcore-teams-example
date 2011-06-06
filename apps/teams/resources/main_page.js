// ==========================================================================
// Project:   Teams - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Teams */

// This page describes the main user interface for your application.  
Teams.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'teamsView'.w(),

    teamsView: SC.TemplateView.design({
      templateName: 'teams'
    })
  })

});
