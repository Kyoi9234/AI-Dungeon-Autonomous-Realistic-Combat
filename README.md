# AI-Dungeon-Autonomous-Realistic-Combat
A realistic and autonomous combat system for AI Dungeon.


⚔️ Autonomous and Realistic Combat
A combat-focused AI Dungeon script designed to make fights more dynamic, tactical, dangerous, and believable.
Instead of treating combat like a rigid turn-based exchange, this script encourages autonomous enemies, continuous attack chains, group tactics, persistent injuries, fatigue, energy limits, and consequences that can affect any character.
✨ Features
🧠 Autonomous Combatants
Characters can act independently based on their abilities and situation.
Combatants may:
- Attack first
- Dodge or evade
- Block or parry
- Counterattack
- Interrupt attacks
- Reposition
- Retreat or pursue
- Set traps
- Exploit terrain
- Target weaknesses
- Adapt to an opponent's fighting style
- Coordinate with allies
⚡ Continuous Anime-Style Combat
Combat is not treated as one action per turn.

Characters can chain attacks together, pursue opponents, interrupt techniques, counter counters, and keep attacking while they still have momentum, stamina, energy, and opportunity.

Example:
Punch → elbow → grab → throw → pursuit → follow-up

or:

Slash → dodge → counter → projectile → rush

A missed or blocked attack does not automatically end a combination.

🎯 Player Actions Are Attempts
The player cannot force an outcome simply by typing it.
For example:
"I dodge the attack." means the player attempts to dodge.

"I punch him and kill him."
means the player attempts a lethal attack.

Outcomes are based on factors such as:
- Strength
- Speed
- Reflexes
- Skill
- Experience
- Combat power
- Durability
- Equipment
- Powers
- Injuries
- Fatigue
- Remaining energy
- Enemy capabilities
- Positioning
- Number of enemies
- Surprise
- Terrain

💀 No Plot Armor
No character is protected by narrative importance.
This includes:
- The player
- Allies
- Enemies
- Companions
- Rivals
- Heroes
- Villains
- Mentors
- Major NPCs
- Any character may fail, be injured, become incapacitated, lose, suffer permanent consequences, or die when the circumstances support it.
- The script also discourages convenient rescues, unexplained power-ups, miraculous survivals, or sudden reinforcements used only to protect an important character.

Injuries can affect:
- Movement
- Strength
- Speed
- Accuracy
- Concentration
- Defense
- Stamina
- Survival
- Wounds are meant to persist until they are credibly treated or healed.

🔋 Fatigue and Energy
Characters cannot fight at maximum output forever.
The script accounts for stamina and setting-specific energy systems such as:
- Mana
- Ki
- Chakra
- Cursed energy
- Psychic energy
- Magical reserves
- Other ability-specific resources
Exhaustion can reduce speed, power, reaction time, accuracy, defense, and the ability to maintain long combinations.

👥 Dangerous Group Combat
Enemies do not have to attack one at a time.
Groups may:
- Attack simultaneously
- Flank
- Surround
- Use crossfire
- Coordinate rushes
- Distract the player
- Combine abilities
- Create openings for each other
Several weaker enemies can become dangerous through teamwork and numbers.

🔥 Desperate Enemies
Enemies facing death, capture, incapacitation, or decisive defeat may stop holding back.
They may use:
- Their strongest established attacks
- Ultimate techniques
- Transformations
- Rare items
- Dangerous abilities
- Last-resort tactics
- Large amounts of remaining energy

🗣️ Mid-Combat Dialogue
Characters may talk during combat without automatically ending the fight.
They may:
- Taunt
- Threaten
- Negotiate
- Boast
- Coordinate
- Reveal motives
- Comment on techniques
Conversation may also create opportunities for distraction, recovery, repositioning, deception, or attack.

🌍 Beyond Combat
The universal outcome rules also apply to uncertain actions outside battle.
Examples include:
- Climbing
- Sneaking
- Persuasion
- Escaping
- Tracking
- Driving
- Piloting
- Investigation
- Survival
- Difficult physical or mental tasks
Simple everyday actions are not meant to fail randomly.

📥 Installation
1. Open the AI Dungeon Scenario you want to use. 
2. Go to Details.
3. Open Scripting.
4. Open the Context script section.
5. Paste the contents of context.js.
6. Save your Scenario.
For the current version, you do not need matching code in Library, Input, or Output.

🤖 Recommended AI Models
This script works best with models that are good at instruction-following, combat, continuity, and handling long context. (ensure optimized context is turned off)
Good options include:
- Wayfarer Large
- DeepSeek V4 Pro
- Mistral Large 2
- Wayfarer Small 2
- Nova 70B
Larger context windows are recommended because the script shares context space with your story, Story Cards, Plot Essentials, and other scenario information.

⚠️ Important Notes
This is not a numerical RPG engine.
The script does not use hard HP values, dice rolls, or exact damage calculations. Instead, it gives the AI stronger instructions for judging outcomes based on established abilities, injuries, fatigue, energy, tactics, numbers, and circumstances.
Results may still vary depending on the AI model you use.
🎮 Goal
The purpose of this script is to make AI Dungeon feel:
- More challenging
- More reactive
- More tactical
- More immersive
- More unpredictable
- More consistent
- More dangerous
- More rewarding
Victories should feel earned.
Defeats should feel believable.
Enemies should feel alive.
And combat should feel like something you have to survive, not something the story automatically lets you win.
⚔️ Fight Smart. Adapt. Survive.
Autonomous and Realistic Combat turns combat into a living battlefield where every meaningful action can have consequences.
📄 License
If this repository includes an MIT License, you may use, modify, and redistribute the script under the terms of that license.
