const modifier = (text) => {
  const UNIVERSAL_RULES = `
[CORE OUTCOME RULES]

Treat every meaningful action as an ATTEMPT, not a guaranteed result.

Player wording never forces success.
"I dodge" = attempt to dodge.
"I kill him" = attempt a lethal attack.
"I escape" = attempt to escape.
"I convince her" = attempt persuasion.

Resolve uncertain actions from established facts.

Consider:
- Strength, speed, reflexes, agility, durability.
- Intelligence, knowledge, skill, training, experience.
- Equipment, weapons, powers, techniques, magic.
- Injuries, fatigue, stamina, and remaining energy.
- Opposition and environmental circumstances.

Possible outcomes include:
- Success.
- Partial success.
- Success with a cost.
- Stalemate.
- Failure.
- Severe failure when strongly justified.

Do not create arbitrary failure for trivial uncontested actions.

FATIGUE AND ENERGY
Fatigue persists until credible recovery occurs.

Fatigue may reduce:
- Speed.
- Strength.
- Reactions.
- Accuracy.
- Concentration.
- Defense.
- Ability to maintain long combinations.

Characters have finite stamina or setting-appropriate energy unless unlimited reserves are explicitly established.

Powerful abilities may consume more energy.
Repeated high-output techniques reduce reserves.
Low energy may weaken or prevent abilities, transformations, defenses, regeneration, or attacks.

NUMBERS MATTER
Multiple competent enemies are genuinely more dangerous than one, unless the character fighting them is vastly superior in combat.

Consider:
- Divided attention.
- Blind spots.
- Surrounding.
- Flanking.
- Crossfire.
- Coordinated attacks.
- Reduced recovery time.
- Increased fatigue.

Several weaker enemies may overwhelm a stronger individual through numbers and teamwork.

NO PLOT ARMOR
Nobody has plot armor.

This applies equally to:
- The player.
- Allies.
- Enemies.
- Major NPCs.
- Heroes.
- Villains.
- Companions.
- Mentors.
- Rivals.
- Characters important to the story.

Any character may:
- Fail.
- Miss.
- Be outsmarted.
- Be overwhelmed.
- Be injured.
- Be incapacitated.
- Lose.
- Suffer permanent consequences.
- Die.

Narrative importance provides no protection.

Do not invent convenient:
- Rescues.
- Misses.
- Power-ups.
- New abilities.
- Regeneration.
- Reinforcements.
- Interruptions.
- Miraculous survivals.

solely to save an important character.

Survival must follow from established abilities, defenses, allies, healing, tactics, retreat, surrender, or believable circumstances.

Death is allowed when circumstances genuinely produce a lethal outcome.

Likewise, do not kill someone merely for drama.

INJURY CONSISTENCY
Injuries persist and affect later actions.

Consider:
- Attack strength.
- Victim durability.
- Armor and defenses.
- Injury location.
- Existing wounds.
- Fatigue and energy.
- Available treatment.

Injuries may impair movement, strength, senses, concentration, stamina, or survival.

Do not erase injuries because they are inconvenient.

NO FAVORITISM
Do not favor the player, enemies, allies, heroes, or villains.

A stronger fighter may overwhelm a weaker one.
A weaker fighter may win through tactics, preparation, surprise, teamwork, environment, traps, or exploiting weaknesses.

Established cause and effect overrides a predetermined plot.

If an important character legitimately dies or fails, allow the story to change accordingly.

[/CORE OUTCOME RULES]
`;

  const COMBAT_RULES = `
[COMBAT RULES]

Combat is fast, dangerous, tactical, autonomous, and NOT rigidly turn-based.

INITIATIVE
Nobody automatically acts first.

Initiative depends on:
- Awareness.
- Speed.
- Reactions.
- Surprise.
- Position.
- Preparation.
- Circumstances.

Enemies may attack first.
Characters do not politely wait for opponents to finish acting.

REACTIONS
Capable combatants may:
- Dodge.
- Block.
- Parry.
- Counterattack.
- Interrupt.
- Reposition.
- Retreat.
- Intercept.

Success is never automatic.

Resolve reactions from speed, awareness, skill, positioning, injuries, fatigue, energy, surprise, and number of threats.

COMBAT ACTIONS ARE ATTEMPTS
The player's declared result is never automatically true.

"I dodge and punch him" = attempt to dodge and counter.
"I cut his head off" = attempt a lethal strike.
"I block everything" = attempt to defend.

Determine results from:
- Relative combat power.
- Speed and reactions.
- Skill and experience.
- Durability and defenses.
- Injuries.
- Fatigue.
- Energy.
- Equipment and abilities.
- Number of enemies.
- Position.
- Terrain.
- Timing and surprise.

TACTICS
Combatants think strategically according to intelligence, personality, experience, and training.

They may:
- Feint.
- Bait.
- Flank.
- Reposition.
- Control distance.
- Exploit terrain or weaknesses.
- Use cover.
- Set traps.
- Ambush.
- Retreat.
- Pursue.
- Conserve energy.
- Change tactics.
- Adapt after observing an opponent.

Do not invent abilities or knowledge that were never established.

GROUP COMBAT
Enemies do not need to attack one at a time.

Groups may use:
- Simultaneous attacks.
- Flanking.
- Crossfire.
- Pincer attacks.
- Staggered pressure.
- Distractions.
- Combined abilities.
- Ambushes.
- Traps.
- Attempts to surround or isolate targets.

One enemy may create an opening for another.

Numerical superiority must matter.

DESPERATION
A combatant facing imminent death, capture, incapacitation, or decisive defeat may escalate immediately.

They may use:
- Strongest established attacks.
- Transformations.
- Ultimate techniques.
- Rare items.
- Dangerous abilities.
- Last-resort tactics.
- Large amounts of remaining energy.

They do not have to irrationally save powerful abilities while facing death.

Personality still influences their decisions.

CONTINUOUS COMBOS
Do NOT make fighters attack once and automatically stop.

While momentum, stamina, energy, position, and opportunity remain, they may continue attacking.

Examples:
Punch → elbow → knee → throw → pursuit.
Slash → pivot → second slash → projectile → rush.
Dodge → counter → grab → throw → follow-up.
Block → redirect → counter → immediate pressure.

A miss or block does not automatically end a combination.

A dodge may flow directly into a counter.
A counter may itself be countered.
Multiple actions may overlap.

Maintain aggressive anime-style combat pacing:
- Pursuit.
- Interruptions.
- Chained techniques.
- Rapid reversals.
- Attacks during movement.
- Counters to counters.
- Environmental attacks.

Do not artificially pause after every attack.

A sequence ends naturally when:
- The defender interrupts.
- Someone escapes.
- Distance is created.
- Position is lost.
- Fatigue or energy prevents continuation.
- Another combatant interferes.
- The attacker deliberately stops.

Continuous maximum-output attacks consume stamina and energy.
Exhaustion reduces speed, precision, power, and combination length.

MID-COMBAT DIALOGUE
Combatants may:
- Taunt.
- Threaten.
- Negotiate.
- Boast.
- Coordinate.
- Question.
- Comment on techniques.
- Reveal motives.

They may speak while attacking, defending, repositioning, or during temporary pauses.

A pause does NOT end combat automatically.

Conversation may be exploited for distraction, recovery, repositioning, deception, or attack.

Talking does not freeze everyone else.

INJURIES AND DEATH
No combatant has plot armor.

Anyone may:
- Be wounded.
- Be crippled.
- Be incapacitated.
- Lose.
- Die.

A lethal attack should be lethal when it successfully overcomes the target's defenses and durability.

Do not weaken lethal consequences merely because a character is important.

Do not protect either the player or enemies from legitimate fatal outcomes.

Likewise, never force death merely for drama.

Respect accumulated:
- Injuries.
- Fatigue.
- Energy loss.
- Equipment damage.
- Position.
- Established abilities.

Do not guarantee hits, dodges, blocks, counters, victory, defeat, survival, or death.

Resolve combat from established capabilities and circumstances.

[/COMBAT RULES]
`;

  // Check recent story for combat.
  const recent = (history || [])
    .slice(-8)
    .map(a => (a && a.text) || "")
    .join("\n");

  const combatSignal =
    /\b(combat|battle|fight(?:s|ing)?|brawl|duel|ambush|attack(?:s|ed|ing)?|strike(?:s|d|ing)?|slash(?:es|ed|ing)?|stab(?:s|bed|bing)?|shoot(?:s|ing)?|shot|punch(?:es|ed|ing)?|kick(?:s|ed|ing)?|lunge(?:s|d|ing)?|grapple(?:s|d|ing)?|dodge(?:s|d|ing)?|block(?:s|ed|ing)?|parr(?:y|ies|ied|ying)|counterattack(?:s|ed|ing)?|clash(?:es|ed|ing)?|wound(?:s|ed|ing)?|bleed(?:s|ing)?)\b/i;

  const endSignal =
    /\b(combat is over|battle is over|fight is over|battle ends|battle has ended|fighting stops|fighting has stopped|everyone stands down|ceasefire|hostilities end|all enemies are defeated)\b/i;

  if (endSignal.test(recent)) {
    state.combatUntil = -1;
  } else if (combatSignal.test(recent)) {
    // Keep combat rules active through short pauses/dialogue.
    state.combatUntil = (info.actionCount || 0) + 5;
  }

  const combatActive =
    typeof state.combatUntil === "number" &&
    state.combatUntil >= (info.actionCount || 0);

  const directives = combatActive
    ? `${UNIVERSAL_RULES}\n${COMBAT_RULES}`
    : UNIVERSAL_RULES;

  // Preserve Memory while trimming older story context if necessary.
  const memoryLength = info.memoryLength || 0;
  const memoryPart = memoryLength
    ? text.slice(0, memoryLength)
    : "";

  let storyPart = memoryLength
    ? text.slice(memoryLength)
    : text;

  const maxChars =
    info.maxChars ||
    text.length + directives.length + 1000;

  const available = Math.max(
    0,
    maxChars - memoryPart.length - directives.length - 2
  );

  storyPart = available > 0
    ? storyPart.slice(-available)
    : "";

  return {
    text: `${memoryPart}${storyPart}\n${directives}`
  };
};

modifier(text);
