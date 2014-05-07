#pragma strict

var Controller : GameObject;

function OnMouseDown() {
	Application.LoadLevel("Echo");
}

function Update() {
	if ((Controller.GetComponent(GameController).IsFlying == false) && (Input.GetButton("Fire2") || Input.GetKey("z")))
	{
		
		Application.LoadLevel("Echo");
	}
}