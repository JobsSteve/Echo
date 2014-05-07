#pragma strict

function Update () {
	if ((Input.GetButton ("Fire2") || Input.GetKey ("z")))
	{
		Application.LoadLevel("Echo");
	}
}