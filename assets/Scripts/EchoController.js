#pragma strict

var speed : float;
var lifeSpan: float;

function Start () {
	rigidbody.velocity = Vector3(0.0f,0.0f,speed);
	
	Destroy (gameObject, lifeSpan);
}

function Update () {

}