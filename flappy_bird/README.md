# Microsoft Unity Workshop
> By Aleida Olvera, Georgetown University's Microsoft Student Partner
The purpose of this workshop is to create a Flappy Bird Style game in [Unity 3D]("https://unity3d.com/get-unity/download").

## Workshop Todo's:
- [ ] Download Unity
- [ ] Learn Unity functionalities and the potential of Unity
- [ ] Create your own flappy bird game!

## Installing Unity3D
Head over to the [Unity Download website]("https://unity3d.com/get-unity/download") to download Unity 3D.

## Creating a Project
* First we will create a project and select a folder to save your work in.
* Make sure to select 2D instead of 3D when creating your game!

## Organizing your Project
<p align="center">
![Project Window](nsbe_pics/project.png)
</p>
Navigate to the project window and create the following folder structure.
- Prefabs
    - In Unity, a Prefab is an object that can be reused and created such as bullets, enemies, or walls.
- Scenes
    - Scenes are basically levels in your game!
- Scripts
    - This is where we will keep all relevant code that we will create.
- Sprites
    - Here we will keep all relevant game images. In game development, these images are referred to as ***sprites***.

Alternatively, you can download this repo and drag the folders directly to your Project area!

## Setting Up the Game
### The Background
<p align="center">
![Project Window](nsbe_pics/background.png)
</p>
Head over to your Sprites folder and select the background image. Drag and drop that image directly to your scene.

### The Player
<p align="center">
![Background Selections](nsbe_pics/sprite.png)
</p>
Similar to what we did with our background, we will drag and drop any one of our players to the screen. Position the player to the center by changing the position the same way we did to our background.
> **KEY**: Make sure to change the `Z-Position` of the player to 1 so the player is always in the front.

### Adding Physics and Gravity
We are going to click Add Component and type in `Rigidbody 2D` and press enter.
> **MAJOR KEY**: `Rigidbody 2D` is a feature in Unity that binds different objects to various physics. You can edit the gravity of the player, as well as their speed and acceleration!

Let's test our game out by hitting the play button! Our player falls off the screen and is subject to gravity just like the rest of us!

## Scripting
### Controlling the Player
Now Let's create a Script that controls our player! If you downloaded the assets, just go to the Script folder and select the Player.cs script. We'll be writing a bit of C# so we can control our character!

Below is the script that we will be using to control our player! Let's talk about the code!

```c
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
	}
}

```

## Back to Setting Up
### Obstacles
Position the obstacles so they are above each other. Keep an eye on the `X Rotation` for the bottom obstacle. That should be rotated 180 degrees.

After resetting their positions, let's move the obstacles to the right, outside of the background. We can do this by navigating to both obstacle objects and setting their `X Position` to `15`.

In our file menu, let's create a new **GameObject**. Navigate to this by going to `GameObject > Create Empty`. This will add the empty object that will basically be a folder that will hold our green pipe obstacles. Name it anything you want and Drag the the two pipes to the **GameObject** you just created.

## Back to Scripting
### Giving Obstacles Movement
Let's add a `RigidBody` to the GameObject we just created. In the inspector, let's make sure that `Is Kinematic` is checked off. This removes the influence of gravity on the object.

Let's create another script called `Obstacle.cs` and place it in our Scripts folder. For those that downloaded the assets from the github repo, you should just head to the empty Obstacle.cs file. We will fill the file with the following code:

```c
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


```

Let's talk about the code!

### Generating More Obstacles
Alright, we are getting closer to a real Flappy Bird game! But... we need more objects! To do this, let's drag our Obstacle GameObject into the Prefabs folder. This turns our object into a Prefab, which is an object that can be created and destroyed many times. Now we can delete our Obstacle object from the scene.

### Generate Obstacles Script
Next, we are going to create another empty GameObject and rename it to
Create another Empty GameObject and rename it to `Control`. Add a Generate.cs script to `Control` and paste the following code into the file:

```c
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Generate : MonoBehaviour {

	public GameObject Obstacle;

	// Use this for initialization
	void Start()
	{
		InvokeRepeating("CreateObstacle", 1f, 1.5f);
	}

	void CreateObstacle()
	{
		Instantiate(Obstacle);
	}
}

```

Let's talk about the code!


## Finishing the Game
### Losing
Right now, running into obstacles doesn't do anything. So let's make this happen by adding collisions to our Player and Obstacle prefab
You may have noticed that running into the obstacles doesn’t do anything. Let’s make something happen because of this collision.

1. First click on our player and add a `Polygon Collider 2D`. We'll do the same for the `Obstacle` Prefab.
2. Head over to your `Obstacle` PreFab and click the small arrow. Select the first object and add a a `Polygon Collider 2D` for both obstacle objects.
3. Let's test out our game and please take note of what interesting things occur.

This is awesome! But we want the game to restart whenever the player collides with an obstacle. Let's edit the `Player.cs` script to add this functionality.

```c
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
```

Now, let's talk about the code!

### Final Thoughts
Let's run the game! What happens anytime the player is offscreen or when the player collides into an obstacle?

How can we improve the functionality of this game? Are there any potential problems to what we currently have? How can we potentially make this game better?

### Homework: Scoring!
For anyone who is interested. Read up on some of Unity's API to find out how you can add some scoring system into the `Control` object.

# Thanks for participating in NSBE Week and our Short Coding Workshop!
> Created by Aleida Olvera, Georgetown's Microsoft Student Partner
