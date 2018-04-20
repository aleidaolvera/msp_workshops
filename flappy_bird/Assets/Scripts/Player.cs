using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
	
	//Holds a reference to the Rigidbody2D component of the bird.
	private Rigidbody2D rb2d;               
	// The force which is added when the player jumps
	public float jumpForce = 300;
	void Start ()
	{
		//Get and store a reference to the Rigidbody2D attached to this GameObject.
		rb2d = GetComponent<Rigidbody2D>();
	}
	// Update is called once per frame
	void Update ()
	{
		// Jump
		if (Input.GetKeyUp("space"))
		{
			rb2d.velocity = Vector2.zero;
			rb2d.AddForce(new Vector2(0, jumpForce));
		}
		// Die by being off screen
		Vector2 screenPosition = Camera.main.WorldToScreenPoint(transform.position);
		if (screenPosition.y > Screen.height || screenPosition.y < 0)
		{
			Die();
		}
	}

	// Die by collision
	void OnCollisionEnter2D(Collision2D other)
	{
		Die();
	}

	void Die()
	{
		Application.LoadLevel(Application.loadedLevel);
	}
}