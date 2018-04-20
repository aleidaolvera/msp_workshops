using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Obstacle : MonoBehaviour {
	//Holds a reference to the Rigidbody2D component of the bird.
	private Rigidbody2D rb2d;               
	public Vector2 velocity = new Vector2(-7, 0);
	// create our random variable
	public float random = -3;
	// Use this for initialization
	void Start()
	{
		//Get and store a reference to the Rigidbody2D attached to this GameObject.
		rb2d = GetComponent<Rigidbody2D>();
		// let's add a bit of randomness
		transform.position = new Vector3(transform.position.x, transform.position.y - random * Random.value, transform.position.z);
	}
	
	// Update is called once per frame
	void Update () {
		rb2d.velocity = velocity;
	}
}
