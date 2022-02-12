# Output Data Specification

The scouting backend takes raw event data from the scouting app (each record is a timestamped event, like scoring a ball
) and turns it into data that is indexed by match.

More specifically, the data will be outputted into a table with one row for each match, team pair (6 rows total per match). Each row will have the following attributes:
* `matchType`:  `practice`,`qualification`, or `elimination`
* `matchNumber`
* `teamNumber`
* `autoTaxi`: `true` or `false`
* `autoFinalCargoInRobot`: Number of cargo possessed by the robot at the end of the autonomous period
* `autoTotalShots`: Total number of cargo that exit the robot during auto, regardless of whether they score
* `autoHighHubGoals`: Number of cargo scored in the High Hub during auto
* `autoLowHubGoals`: Number of cargo scored in the Low Hub during auto
* `teleopTotalShots`: Total number of cargo that exit the robot during teleop, regardless of whether they score
* `teleopHighHubGoals`: Number of cargo scored in the High Hub during teleop
* `teleopLowHubGoals`: Number of cargo scored in the Low Hub during teleop
* `climbTime`: time between the robot entering the hangar and the end of the match, `0` if climb is not attempted
* `startRung`: first rung attached to by robot (`1`,`2`,`3`, or `4`), or blank if climb is not attempted
* `highestRung`: highest rung that the robot hangs from at any point during climb (`1`,`2`,`3`, or `4`), or blank if climb is not attempted
* `fell`: `true` or `false`. If `true`, the robot fell and did not score any points for climb, if `false` the robot climbed to `highestRung`