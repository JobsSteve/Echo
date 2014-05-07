#pragma strict

var Controller : GameObject;

function OnTriggerEnter(other: Collider)
{
	if (other.tag == "Cave")
	{
		Controller.rigidbody.velocity = Vector3(0,0,0);
		
		Controller.GetComponent(GameController).IsFlying = false;
	}
	
	Destroy(gameObject);
}