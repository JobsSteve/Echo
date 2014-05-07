#pragma strict

function Update () {
	transform.position.z = Mathf.Sin(Time.time * .1) * 4;
}