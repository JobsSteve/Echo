#pragma strict


var gameController : GameObject;
var straight : GameObject;
var curved : GameObject;
var nextCave : GameObject;
var angle : float;

var prob: int = 50;

function OnTriggerExit(other: Collider) 
{
	Destroy(other.gameObject);
	
	var script : GameController = gameController.GetComponent(GameController);
	var posn : Vector3 = script.endMarker.transform.position;
	var rotn : Quaternion = script.endMarker.transform.rotation;
	
	var randPiece : int = Random.Range(1,100);
	
	var playTime : float = Time.time;
	
	if (playTime >= 30 && playTime < 60)
	{
		prob = 40;
		script.speed = 30;
	}
	else if (playTime >= 60)
	{
		prob = 30;
		script.speed = 35;
	}
	
	if (randPiece <= prob)
	{
		nextCave = straight;
	}
	else
	{
		nextCave = curved;
		angle = Random.Range(1,360);
	}
	
	var newCave = Instantiate(nextCave, posn, rotn);
	
	
	if (randPiece > 50)
	{
		newCave.transform.RotateAround(posn, rotn * Vector3(0,0,1), angle);
	}
	
			
	newCave.transform.parent = gameController.transform;
	
	script.endMarker.transform.position = newCave.transform.Find("marker").transform.position;
	script.endMarker.transform.rotation = newCave.transform.Find("marker").transform.rotation;	
	
}