#pragma strict

var speed : int;
var straight : GameObject;

var rotateSpeed : float;
var IsFlying : boolean = true;

var loseText : GUIText;
var againText : GUIText;
var breathCounter : GUIText;
var scoreCounter : GUIText;
var highScoreCounter : GUIText;

var echoLight : GameObject;
var fireRate : float;
private var nextFire : float = 0.0;
var breath : int = 3;
private var score : int = 0;
private static var highScore : int = 0;

var marker : GameObject;
var endMarker : GameObject;



function Start () {

	rigidbody.velocity = Vector3(0,0,-speed);
	UpdateBreaths();
	UpdateScore();
	UpdateHighScore();
	
	var i : int;
	for (i = 0; i < 6; i ++)
	{
		var temp = Instantiate(straight,Vector3(0,0,i*40),Quaternion(0,0,0,0));
		temp.transform.parent = transform;
	}
	
	
	endMarker = Instantiate(marker, Vector3(0,0,i*40), Quaternion(0,0,0,0));
	endMarker.transform.parent = transform;
	
}

function FixedUpdate () {

	var rotateHorizontal : float = Input.GetAxis ("Horizontal");
    var rotateVertical : float = Input.GetAxis ("Vertical");
    
    if (IsFlying)
    {
	    transform.RotateAround(Vector3.zero,Vector3(1,0,0),-rotateSpeed * rotateVertical);
	    transform.RotateAround(Vector3.zero,Vector3(0,1,0),-rotateSpeed * rotateHorizontal);
	    
	    if ((Input.GetButton ("Fire2") || Input.GetKey("z")) && Time.time > nextFire && breath > 0) 
	    {
			nextFire = Time.time + fireRate;
			var clone : GameObject = Instantiate(echoLight, Vector3.zero, Quaternion(0,0,0,0)) as GameObject;
			breath--;
			UpdateBreaths();
		}
		
		if (breath < 3 && (Time.time % 2.0 == 0))
		{
			breath ++;
			UpdateBreaths();
		}
		
		if ((Time.time * 10) % 1.0 == 0)
		{
			score++;
			UpdateScore();
			
			if (score > highScore)
			{
				highScore = score;
				UpdateHighScore();
			}
		}
	}
	else 
	{
		loseText.text = "GAME OVER";
		againText.text = "try again?";
	}
}

function UpdateBreaths() {
	
	breathCounter.text = ("Breaths: " + breath).ToString();
}

function UpdateScore() {
	
	scoreCounter.text = ("Score: " + score).ToString();
}

function UpdateHighScore() {
	
	highScoreCounter.text = ("High Score: " + highScore).ToString();
}