// ==========================================================================
// Project:   Teams.Team
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Teams */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Teams.Team = SC.Record.extend(
/** @scope Teams.Team.prototype */ {
  name: SC.Record.attr(String),
  players: SC.Record.toMany(
    'Teams.Player', 
    { isMaster: YES, inverse: 'team' }
  )

}) ;
