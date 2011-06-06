// ==========================================================================
// Project:   Teams.Player
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Teams */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Teams.Player = SC.Record.extend(
/** @scope Teams.Player.prototype */ {
  name: SC.Record.attr(String),
  team: SC.Record.toOne(
    'Teams.Team', 
    { isMaster: NO }
  )

}) ;
