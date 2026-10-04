const modifier = (text) => {
  const ACTION = info.actionCount || 0;

  const COMBAT_GRACE_ACTIONS = 6;
  const CARD_MEMORY_ACTIONS = 10;

  // Your preferred larger limits.
  const MAX_ACTIVE_CARDS = 20;
  const MAX_CARD_CONTEXT_CHARS = 10000;


  /*
   * ============================================================
   * CORE RULES — always active
   * ============================================================
   */

  const CORE_RULES = `
[ARC CORE RULES]

OUTCOMES
- Treat every meaningful, uncertain, opposed, dangerous, or strenuous action as an attempt, not a guaranteed result.
- Player wording never forces success, quantity, speed, damage, injury, death, or any other outcome.
- Claims such as "I dodge," "I hit him 1000 times," or "I kill him" mean the character attempts those things.
- Resolve outcomes from established capability and circumstance.
- Always output new information; do not repeat things; continue from where the story left off without repetition. 

Consider:
- Strength.
- Speed.
- Reaction speed.
- Agility.
- Durability.
- Intelligence.
- Skill.
- Training.
- Experience.
- Equipment.
- Weapons.
- Powers.
- Techniques.
- Transformations.
- Injuries.
- Fatigue.
- Remaining energy.
- Opposition.
- Number of opponents.
- Positioning.
- Terrain.
- Surprise.
- Timing.

Possible outcomes include:
- Full success.
- Partial success.
- Success with cost.
- Stalemate.
- Failure.
- Severe failure when strongly justified.

- Do not create arbitrary failure for trivial, safe, uncontested actions.


POWER & CAPABILITY SOURCES

PLAYER
- Treat Plot Essentials as the primary baseline source for the player's established capabilities.

Use Plot Essentials for established:
- Strength.
- Speed.
- Reaction speed.
- Agility.
- Durability.
- Intelligence.
- Combat skill.
- Experience.
- Powers.
- Techniques.
- Equipment.
- Weapons.
- Transformations.
- Resistances.
- Weaknesses.
- Energy reserves.
- Special conditions.
- Limitations.


ENEMIES, ALLIES, AND NPCS
- Treat relevant Story Cards as the primary baseline source for enemies, allies, and other NPCs when available.

Story Cards may establish:
- Strength.
- Speed.
- Reactions.
- Durability.
- Intelligence.
- Skill.
- Combat experience.
- Weapons.
- Powers.
- Techniques.
- Transformations.
- Resistances.
- Weaknesses.
- Energy reserves.
- Special conditions.
- Limitations.

- If several combatants have individual Story Cards, evaluate them individually.
- Do not treat everyone in a group as having identical capabilities.
- Never automatically scale enemies to match the player.
- Never automatically scale the player to match enemies.
- Preserve genuine differences in power.


CURRENT CONDITION OVERRIDES BASELINE

Plot Essentials and Story Cards describe baseline capability.

The recent story describes CURRENT condition.

Current condition includes:
- Injuries.
- Blood loss.
- Exhaustion.
- Energy expenditure.
- Damaged equipment.
- Lost equipment.
- Broken weapons.
- Active transformations.
- Expired transformations.
- Temporary boosts.
- Temporary debuffs.
- Environmental effects.
- Positioning.
- Recent consequences.

Current condition modifies baseline capability.

Example:
An extremely fast enemy with badly injured legs should not move at their normal maximum speed.

Example:
A normally powerful player who is exhausted and nearly out of energy should perform according to their current weakened state.


SOURCE PRIORITY

When determining capability, use:

1. Current established condition and recent consequences.
2. Explicit information in Plot Essentials and relevant Story Cards.
3. Other clearly established story information.
4. Conservative reasonable inference only when necessary.

- Never override explicit information with an invented power level.
- Missing information does not automatically make someone weak.
- Missing information does not automatically make someone overwhelmingly strong.
- Missing information does not grant immunity.
- Missing information does not create vulnerability.
- Do not invent abilities simply because they would help someone win or survive.


CONSISTENCY

- Never grant feats beyond established capability merely because they are declared.
- Preserve established power.
- Preserve established abilities.
- Preserve injuries.
- Preserve fatigue.
- Preserve energy expenditure.
- Preserve equipment damage.
- Preserve lost equipment.
- Preserve positioning.
- Preserve consequences.

Fatigue persists until credible recovery.

High-output actions consume appropriate stamina or setting-specific energy unless explicitly established otherwise.

Injuries persist until credibly treated or healed.

Injuries may impair:
- Movement.
- Strength.
- Speed.
- Senses.
- Concentration.
- Defense.
- Stamina.
- Survival.

Accumulated trauma may incapacitate or kill someone even when no single injury was instantly lethal.


NO PLOT ARMOR

No character has plot armor.

This includes:
- The player.
- Allies.
- Enemies.
- Companions.
- Rivals.
- Heroes.
- Villains.
- Mentors.
- Major NPCs.

Anyone may:
- Miss.
- Fail.
- Make mistakes.
- Be outsmarted.
- Be overwhelmed.
- Be injured.
- Suffer permanent consequences.
- Lose.
- Become incapacitated.
- Die.

Narrative importance does not protect anyone.

Do not invent convenient:
- Misses.
- Rescues.
- Interruptions.
- Reinforcements.
- Power-ups.
- Abilities.
- Regeneration.
- Miraculous survival.

solely to preserve an important character.

Do not force injury or death merely for drama either.

Survival and death must both follow established cause and effect.

If a major consequence changes the intended storyline, continue from the new reality rather than undoing it.


NUMBERS & OPPOSITION

- Multiple competent opponents create real pressure.
- Divided attention matters.
- Blind spots matter.
- Flanking matters.
- Crossfire matters.
- Coordination matters.
- Reduced recovery time matters.
- Greater fatigue matters.

Several weaker opponents may overwhelm a stronger individual through numbers and teamwork.

Do not weaken groups simply because the player is the protagonist.


NON-COMBAT

Apply the same attempt-and-consequence logic to meaningful uncertain actions outside combat.

Examples:
- Persuasion.
- Deception.
- Stealth.
- Escape.
- Climbing.
- Tracking.
- Investigation.
- Driving.
- Piloting.
- Survival.
- Crafting.
- Difficult physical tasks.
- Difficult mental tasks.

[/ARC CORE RULES]
`;


  /*
   * ============================================================
   * COMBAT RULES
   * ============================================================
   */

  const COMBAT_RULES = `
[ARC COMBAT RULES]

POWER COMPARISON

Before resolving an important exchange, compare established capabilities.

Use:
- Plot Essentials as the primary baseline for the player.
- Relevant Story Cards as the primary baseline for enemies and NPCs.
- Recent events for current condition.

Then account for:
- Injuries.
- Fatigue.
- Energy.
- Equipment state.
- Transformations.
- Positioning.
- Terrain.
- Surprise.
- Numbers.
- Temporary effects.

A much faster character should normally possess a meaningful speed advantage.

A much stronger character should normally possess a meaningful power advantage.

A more durable character should withstand proportionally more punishment.

A more skilled or experienced fighter should make better tactical decisions.

Advantages do not guarantee victory.

Matchups, weaknesses, numbers, injuries, fatigue, energy, strategy, surprise, and terrain can change outcomes.


AUTONOMY & INITIATIVE

Combat is:
- Fast.
- Dangerous.
- Tactical.
- Autonomous.
- Not rigidly turn-based.

Any capable combatant may:
- Attack first.
- Interrupt.
- Dodge.
- Evade.
- Block.
- Parry.
- Counterattack.
- Reposition.
- Pursue.
- Retreat.
- Intercept.
- Exploit an opening.

Initiative and reactions depend on:
- Awareness.
- Speed.
- Reactions.
- Surprise.
- Position.
- Preparation.
- Skill.
- Injuries.
- Fatigue.
- Energy.
- Circumstances.

None of these actions automatically succeed.


TACTICS

Combatants think strategically according to:
- Intelligence.
- Personality.
- Training.
- Experience.
- Knowledge.
- Goals.

Combatants may:
- Feint.
- Bait attacks.
- Flank.
- Control distance.
- Use cover.
- Exploit terrain.
- Target weaknesses.
- Conserve resources.
- Spend resources aggressively.
- Adapt to observed abilities.
- Prepare ambushes.
- Create hazards.
- Set traps.
- Lure opponents.
- Retreat.
- Pursue.
- Change tactics.

Do not invent powers, equipment, or knowledge that were never established.


GROUP COMBAT

Enemies do not need to attack one at a time.

Multiple combatants may attack:
- Simultaneously.
- In coordinated waves.
- From different directions.

Groups may:
- Flank.
- Surround.
- Use crossfire.
- Distract.
- Perform pincer attacks.
- Combine abilities.
- Apply staggered pressure.
- Set traps.
- Suppress movement.
- Create openings for each other.

Numerical advantage must materially affect:
- Attention.
- Defense.
- Stamina.
- Positioning.
- Awareness.
- Opportunities to counterattack.


PLAYER-CENTERED GROUP BATTLE FOCUS

When combat contains multiple allies and enemies, such as:
- 2v2.
- 3v2.
- 3v3.
- 4v4.
- Larger battles.

the PLAYER'S immediate fight remains the primary foreground focus.

The narration should primarily follow:
- The player's opponent.
- The player's attacks.
- The player's defenses.
- Threats directly affecting the player.
- Major events that alter the player's situation.

Do NOT constantly cut away from the player to narrate every other fight in equal detail.

However, other combatants continue fighting in the background.

They do NOT freeze, disappear, or wait simply because the narration is focused on the player.

Background fights should continue progressing logically.

Briefly acknowledge important background developments when relevant, such as:
- An ally taking a serious injury.
- An enemy being defeated.
- A major technique being used.
- Someone being knocked away.
- Someone becoming free to assist another fighter.
- A background fight moving close enough to affect the player's battle.
- A dangerous battlefield-wide attack.


AUTOMATIC OPPONENT ASSIGNMENT

When group combat begins, combatants should naturally identify available opposing combatants.

If practical, each fighter should initially engage an opponent who is not already fully occupied.

Example in a 3v3:

Ally A engages Enemy A.
Ally B engages Enemy B.
The player engages Enemy C.

Do not make every enemy attack the player by default when other valid opposing combatants are present.

Likewise, allies should not all attack one enemy while ignoring other active enemies unless there is a tactical reason to do so.

Characters should naturally seek:
- The closest suitable opponent.
- The greatest immediate threat.
- An opponent attacking them.
- An opponent attacking an ally they want to protect.
- A tactically favorable matchup.
- An unoccupied opponent.

Opponent assignments are NOT permanent target locks.

Combatants may switch opponents when circumstances change.


UNEVEN GROUPS

If one side has more fighters than the other, surplus combatants may:

- Double-team an opponent.
- Flank.
- Provide ranged support.
- Protect an ally.
- Intercept attacks.
- Prepare a trap.
- Attack from a blind spot.
- Control terrain.
- Prevent escape.
- Assist a struggling teammate.

Example in a 3v2:

Two fighters may occupy the two enemies while the third fighter:
- Supports one matchup.
- Protects an ally.
- Flanks.
- Waits for an opening.
- Applies ranged pressure.
- Sets up another tactical advantage.

Do not force every fight into artificial one-on-one duels when numbers or tactics make that unrealistic.


FIGHTER FREED FROM A MATCHUP

When an NPC combatant defeats, incapacitates, drives away, or otherwise finishes with their current opponent, they become tactically free.

A free ALLY may:
- Help the player.
- Help another ally.
- Intercept an enemy.
- Double-team a dangerous opponent.
- Protect an injured ally.
- Pursue a retreating enemy.
- Reposition for another threat.

A free ENEMY may:
- Attack the player.
- Help another enemy.
- Double-team an ally.
- Flank someone.
- Intercept someone.
- Pursue a wounded opponent.
- Protect another enemy.

The same logic applies continuously throughout the battle.

If an ally defeats their opponent before the player defeats theirs, that ally may enter the player's fight and assist.

If an enemy defeats an ally before the player finishes their own fight, that enemy may become free and join another enemy against the player or another ally.

This can naturally transform matchups such as:

3v3
into
3v2
into
2v2
into
2v1

depending on who wins their individual exchanges first.


PLAYER AFTER DEFEATING THEIR OPPONENT

If the player defeats their current opponent, that opponent is no longer occupying them.

The battlefield should recognize that the player is now free.

Do not automatically force the player's next voluntary attack unless the player's intent already establishes it.

Instead, clearly present the ongoing situation so the player may:
- Help an ally.
- Attack another enemy.
- Protect someone.
- Pursue someone.
- Retreat.
- Reposition.
- Take another action.

Enemies may still react to the newly free player.


BACKGROUND BATTLE CONTINUITY

Other fights continue while the player's fight is being narrated.

Track background combat conceptually.

Do not repeatedly provide long unrelated cutaways.

Instead, reveal background progress naturally through:
- Sounds.
- Glimpses.
- Nearby impacts.
- Dialogue.
- Characters crossing into view.
- A defeated fighter falling nearby.
- A major explosion.
- An ally calling for help.
- An enemy suddenly joining the player's fight.

Background combat should feel alive without stealing primary narrative focus from the player.


DESPERATION

A combatant who reasonably believes:
- Death.
- Capture.
- Incapacitation.
- Decisive defeat.

is imminent may escalate immediately.

They may use:
- Their strongest established attacks.
- Transformations.
- Ultimate techniques.
- Dangerous weapons.
- Rare resources.
- Last-resort tactics.
- Large amounts of remaining energy.

They do not have to irrationally save powerful abilities while facing death.

Personality still influences how they react.


CONTINUOUS COMBAT

Do not force one-action-per-turn exchanges.

While momentum, stamina, energy, position, and opportunity remain, fighters may chain:

- Attacks.
- Movement.
- Defenses.
- Counters.
- Grapples.
- Projectiles.
- Powers.
- Environmental attacks.
- Pursuit.

into fluid exchanges.

A miss does not automatically end a combination.

A block does not automatically end a combination.

A dodge does not automatically end a combination.

A counter does not automatically end a combination.

Counters may themselves be:
- Countered.
- Interrupted.
- Anticipated.

Maintain fast anime-style pressure without making combat endless.

Advance the situation meaningfully.

Stop at a natural decision point or meaningful change in advantage.


A continuous sequence may naturally end when:
- Someone interrupts it.
- Someone escapes.
- Distance is created.
- Position is lost.
- Injuries interfere.
- Fatigue becomes severe.
- Energy becomes too low.
- Another combatant interferes.
- The environment changes.
- Someone intentionally pauses.


DIALOGUE

Combatants may:
- Taunt.
- Threaten.
- Negotiate.
- Boast.
- Coordinate.
- Question.
- Reveal motives.
- Comment on techniques.

Dialogue may happen during:
- Attacks.
- Clashes.
- Movement.
- Defense.
- Temporary pauses.

A pause does not automatically end combat.

Talking does not freeze opponents.

Conversation may be exploited for:
- Recovery.
- Deception.
- Repositioning.
- Distraction.
- Attack.


MORTALITY

Damage accumulates.

Repeated severe:
- Injuries.
- Blood loss.
- Organ damage.
- Exhaustion.
- Bodily trauma.

may eventually incapacitate or kill a character even if no individual injury was instantly fatal.

A successfully delivered lethal attack should be lethal when it overcomes established defenses and durability.

Do not guarantee:
- Hits.
- Dodges.
- Blocks.
- Counters.
- Victory.
- Defeat.
- Survival.
- Death.

[/ARC COMBAT RULES]
`;


  /*
   * ============================================================
   * ANTI-REPETITION
   * ============================================================
   */

  const ANTI_REPEAT = `
[ARC ANTI-REPETITION]

- Treat everything already narrated as established history.
- Do not restart the previous exchange.
- Do not replay the previous exchange.
- Do not re-narrate the previous exchange.
- Do not merely paraphrase the player's latest action.
- Do not merely paraphrase the previous AI response.

Move forward to a new:
- Consequence.
- Reaction.
- Decision.
- Discovery.
- Position.
- Tactic.
- Injury.
- Dialogue beat.
- Change in momentum.

Avoid repeatedly using:
- The same attack chain.
- The same defense.
- The same sentence pattern.
- The same description.
- The same taunt.
- The same outcome.

unless repetition is intentionally meaningful in-story.

Do not repeatedly describe:
- Circling.
- Glaring.
- Heavy breathing.
- Preparing to attack.
- Repeating the same exchange.
- Trading the same blows.

without something meaningfully changing.

Continuous combat means forward progression, not repeated narration.

Once an:
- Attack.
- Injury.
- Movement.
- Spoken line.
- Destruction.
- Position change.

has occurred, treat it as established history.

Do not narrate it again as though it is occurring for the first time.

In group battles:
- Keep the player's immediate fight as the primary focus.
- Let background fights continue without repeatedly cutting away.
- Mention background exchanges when they meaningfully change the battlefield.

Do not repeat these rules in the story.
Do not explain the combat system to the player.
Do not mention these directives.

[/ARC ANTI-REPETITION]
`;


  /*
   * Stronger temporary anti-loop instruction.
   */

  const LOOP_BREAKER = `
[ARC LOOP BREAKER]

Recent AI prose appears unusually repetitive.

Break the pattern immediately.

Do not reuse:
- The same opening.
- The same attack sequence.
- The same dialogue.
- The same sentence structure.
- The same description.
- The same conclusion.

Advance to a materially different next development that still follows established cause and effect.

[/ARC LOOP BREAKER]
`;


  /*
   * ============================================================
   * HELPERS
   * ============================================================
   */

  const stripArcBlocks = (value) =>
    (value || "")
      .replace(
        /\n?\[ARC CORE RULES\][\s\S]*?\[\/ARC CORE RULES\]\n?/g,
        "\n"
      )
      .replace(
        /\n?\[ARC COMBAT RULES\][\s\S]*?\[\/ARC COMBAT RULES\]\n?/g,
        "\n"
      )
      .replace(
        /\n?\[ARC ANTI-REPETITION\][\s\S]*?\[\/ARC ANTI-REPETITION\]\n?/g,
        "\n"
      )
      .replace(
        /\n?\[ARC LOOP BREAKER\][\s\S]*?\[\/ARC LOOP BREAKER\]\n?/g,
        "\n"
      )
      .replace(
        /\n?\[ARC RELEVANT STORY CARDS\][\s\S]*?\[\/ARC RELEVANT STORY CARDS\]\n?/g,
        "\n"
      );


  const escapeRegex = (value) =>
    String(value).replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );


  const getKeys = (card) => {
    if (
      !card ||
      card.keys == null
    ) {
      return [];
    }

    if (
      Array.isArray(card.keys)
    ) {
      return card.keys
        .map(
          key =>
            String(key).trim()
        )
        .filter(Boolean);
    }

    return String(card.keys)
      .split(/[,;\n]/)
      .map(
        key =>
          key.trim()
      )
      .filter(Boolean);
  };


  const keyAppears = (
    source,
    key
  ) => {
    if (
      !source ||
      !key
    ) {
      return false;
    }

    const trimmed =
      String(key).trim();

    if (
      trimmed.length < 2
    ) {
      return false;
    }

    if (
      /^[a-z0-9_' -]+$/i.test(
        trimmed
      )
    ) {
      const pattern =
        new RegExp(
          `(^|[^a-z0-9_])${escapeRegex(trimmed)}([^a-z0-9_]|$)`,
          "i"
        );

      return pattern.test(
        source
      );
    }

    return source
      .toLowerCase()
      .includes(
        trimmed.toLowerCase()
      );
  };


  /*
   * Normalize text for duplicate detection.
   *
   * This ignores formatting, punctuation, line breaks,
   * and capitalization.
   */

  const normalizeForMatch = (
    value
  ) =>
    String(value || "")
      .toLowerCase()
      .replace(
        /[^a-z0-9]+/g,
        " "
      )
      .replace(
        /\s+/g,
        " "
      )
      .trim();


  /*
   * Check whether a Story Card already naturally exists
   * in AI Dungeon's supplied context.
   *
   * This prevents us from copying the same card twice.
   */

  const cardAlreadyInContext = (
    card,
    contextText
  ) => {
    if (
      !card ||
      !card.entry ||
      !contextText
    ) {
      return false;
    }

    const entry =
      normalizeForMatch(
        card.entry
      );

    const context =
      normalizeForMatch(
        contextText
      );

    if (
      !entry ||
      !context
    ) {
      return false;
    }

    /*
     * Short/medium Story Cards can be matched directly.
     */
    if (
      entry.length <= 700
    ) {
      return context.includes(
        entry
      );
    }

    /*
     * For long Story Cards, use several fingerprints.
     *
     * This handles small formatting differences while
     * avoiding the need to match the entire card exactly.
     */

    const fingerprintSize =
      180;

    const start =
      entry.slice(
        0,
        fingerprintSize
      );

    const middleStart =
      Math.max(
        0,
        Math.floor(
          entry.length / 2
        ) -
        Math.floor(
          fingerprintSize / 2
        )
      );

    const middle =
      entry.slice(
        middleStart,
        middleStart +
          fingerprintSize
      );

    const end =
      entry.slice(
        Math.max(
          0,
          entry.length -
            fingerprintSize
        )
      );

    let matches = 0;

    if (
      start &&
      context.includes(start)
    ) {
      matches++;
    }

    if (
      middle &&
      context.includes(middle)
    ) {
      matches++;
    }

    if (
      end &&
      context.includes(end)
    ) {
      matches++;
    }

    /*
     * Two fingerprints are enough to confidently consider
     * the card already present.
     */
    return matches >= 2;
  };


  const normalizeWords = (
    value
  ) =>
    String(value || "")
      .toLowerCase()
      .replace(
        /[^a-z0-9\s']/g,
        " "
      )
      .split(/\s+/)
      .filter(
        word =>
          word.length > 2
      );


  /*
   * ============================================================
   * CLEAN ORIGINAL CONTEXT EARLY
   * ============================================================
   *
   * Important:
   * Remove our own previously injected blocks BEFORE checking
   * whether Story Cards are already present.
   *
   * That means our own previous copy cannot fool duplicate
   * detection.
   */

  const cleanedText =
    stripArcBlocks(text);


  /*
   * ============================================================
   * UNDO-SAFE STATE
   * ============================================================
   */

  if (
    typeof state.arcLastActionCount ===
      "number" &&
    ACTION <
      state.arcLastActionCount
  ) {
    delete state.arcCombatUntil;
    delete state.arcCombatCards;
  }

  state.arcLastActionCount =
    ACTION;


  const historyList =
    Array.isArray(history)
      ? history
      : [];


  const cards =
    Array.isArray(storyCards)
      ? storyCards
      : [];


  const newest =
    historyList.length
      ? historyList[
          historyList.length - 1
        ]
      : null;


  const newestText =
    newest &&
    newest.text
      ? newest.text
      : "";


  const playerTypes =
    new Set([
      "do",
      "say",
      "story",
      "see"
    ]);


  const latestPlayer =
    [...historyList]
      .reverse()
      .find(
        action =>
          action &&
          playerTypes.has(
            action.type
          )
      );


  const latestAI =
    [...historyList]
      .reverse()
      .find(
        action =>
          action &&
          action.type ===
            "continue"
      );


  /*
   * ============================================================
   * COMBAT DETECTION
   * ============================================================
   */

  const combatSignal =
    /\b(combat|battle|brawl|duel|ambush|attack(?:s|ed|ing)?|strike(?:s|d|ing)?|slash(?:es|ed|ing)?|stab(?:s|bed|bing)?|shoot(?:s|ing)?|shot|punch(?:es|ed|ing)?|kick(?:s|ed|ing)?|lunge(?:s|d|ing)?|grapple(?:s|d|ing)?|dodge(?:s|d|ing)?|block(?:s|ed|ing)?|parr(?:y|ies|ied|ying)|counterattack(?:s|ed|ing)?|clash(?:es|ed|ing)?|wound(?:s|ed|ing)?|bleed(?:s|ing)?|kill(?:s|ed|ing)?|fight(?:s|ing)?)\b/i;


  const endSignal =
    /\b(combat is over|battle is over|fight is over|battle ends|battle has ended|fight ends|fight has ended|fighting stops|fighting has stopped|everyone stands down|ceasefire|hostilities end|hostilities have ended|all enemies are defeated|combat ends|combat has ended)\b/i;


  if (
    endSignal.test(
      newestText
    )
  ) {
    state.arcCombatUntil =
      -1;

    state.arcCombatCards =
      {};
  } else {
    const currentlyActive =
      typeof state.arcCombatUntil ===
        "number" &&
      state.arcCombatUntil >=
        ACTION;


    /*
     * Player combat input may start or refresh combat.
     */

    const playerCombat =
      latestPlayer &&
      latestPlayer === newest &&
      combatSignal.test(
        latestPlayer.text ||
          ""
      );


    /*
     * AI prose may START a battle if one is not active.
     *
     * Once combat is active, AI prose does NOT keep
     * refreshing the timer forever.
     */

    const aiStartsCombat =
      !currentlyActive &&
      latestAI &&
      latestAI === newest &&
      combatSignal.test(
        latestAI.text ||
          ""
      );


    if (
      playerCombat ||
      aiStartsCombat
    ) {
      state.arcCombatUntil =
        ACTION +
        COMBAT_GRACE_ACTIONS;
    }
  }


  const combatActive =
    typeof state.arcCombatUntil ===
      "number" &&
    state.arcCombatUntil >=
      ACTION;


  if (
    !combatActive &&
    typeof state.arcCombatUntil ===
      "number" &&
    state.arcCombatUntil <
      ACTION
  ) {
    state.arcCombatCards =
      {};
  }


  /*
   * ============================================================
   * RELEVANT STORY CARD TRACKING
   * ============================================================
   */

  state.arcCombatCards =
    state.arcCombatCards ||
    {};


  if (
    combatActive &&
    cards.length
  ) {
    const recentCombatText =
      historyList
        .slice(-6)
        .map(
          action =>
            (
              action &&
              action.text
            ) ||
            ""
        )
        .join("\n");


    const scoredMatches =
      [];


    for (
      const card of cards
    ) {
      if (
        !card ||
        !card.entry
      ) {
        continue;
      }


      const keys =
        getKeys(card);


      const matchingKeys =
        keys.filter(
          key =>
            keyAppears(
              recentCombatText,
              key
            )
        );


      if (
        !matchingKeys.length
      ) {
        continue;
      }


      const entry =
        String(
          card.entry
        );


      const type =
        String(
          card.type ||
          ""
        );


      let score =
        matchingKeys.length *
        3;


      /*
       * Character cards get higher priority.
       */

      if (
        /character|npc|enemy|boss|person|creature|monster|ally|companion/i
          .test(type)
      ) {
        score += 4;
      }


      /*
       * Combat-capability cards get higher priority.
       */

      if (
        /strength|speed|power|ability|abilities|skill|combat|durability|weapon|magic|technique|weakness|resistance|energy|stamina|esper/i
          .test(entry)
      ) {
        score += 2;
      }


      scoredMatches.push({
        card,
        score
      });
    }


    scoredMatches
      .sort(
        (a, b) =>
          b.score -
          a.score
      )
      .slice(
        0,
        MAX_ACTIVE_CARDS
      )
      .forEach(
        ({ card }) => {
          state.arcCombatCards[
            String(card.id)
          ] = ACTION;
        }
      );
  }


  /*
   * Forget cards that have not been relevant recently.
   */

  for (
    const id of
    Object.keys(
      state.arcCombatCards
    )
  ) {
    const lastSeen =
      state.arcCombatCards[id];


    if (
      ACTION -
        lastSeen >
      CARD_MEMORY_ACTIONS
    ) {
      delete state
        .arcCombatCards[id];
    }
  }


  const activeCards =
    combatActive
      ? cards.filter(
          card =>
            card &&
            Object.prototype
              .hasOwnProperty
              .call(
                state.arcCombatCards,
                String(card.id)
              )
        )
      : [];


  /*
   * ============================================================
   * RELEVANT STORY CARD PRESERVATION
   * ============================================================
   *
   * IMPORTANT DUPLICATION FIX:
   *
   * Only copy an active Story Card when AI Dungeon has NOT
   * already naturally included that card in the context.
   *
   * If AI Dungeon later drops the card because of context
   * pressure, the script may restore it.
   */

  let relevantCardsBlock =
    "";


  let remainingCardChars =
    MAX_CARD_CONTEXT_CHARS;


  if (
    activeCards.length &&
    remainingCardChars >
      0
  ) {
    const pieces =
      [];


    for (
      const card of
      activeCards.slice(
        0,
        MAX_ACTIVE_CARDS
      )
    ) {
      if (
        remainingCardChars <=
        0
      ) {
        break;
      }


      /*
       * Skip this card if AI Dungeon already supplied it.
       */

      if (
        cardAlreadyInContext(
          card,
          cleanedText
        )
      ) {
        continue;
      }


      const keys =
        getKeys(card)
          .join(", ");


      const label =
        keys
          ? `Story Card (${keys})`
          : `Story Card ${card.id}`;


      const fullEntry =
        String(
          card.entry ||
            ""
        ).trim();


      if (
        !fullEntry
      ) {
        continue;
      }


      const prefix =
        `\n${label}:\n`;


      const room =
        Math.max(
          0,
          remainingCardChars -
            prefix.length
        );


      if (
        room <= 0
      ) {
        break;
      }


      const entry =
        fullEntry.slice(
          0,
          room
        );


      const piece =
        prefix +
        entry;


      pieces.push(
        piece
      );


      remainingCardChars -=
        piece.length;
    }


    if (
      pieces.length
    ) {
      relevantCardsBlock = `
[ARC RELEVANT STORY CARDS]

These Story Card facts are relevant to characters or entities currently involved in combat.

Use them as established baseline information when determining:
- Power.
- Speed.
- Durability.
- Skill.
- Abilities.
- Equipment.
- Techniques.
- Weaknesses.
- Resistances.
- Energy.
- Limitations.

Recent injuries, fatigue, energy use, equipment changes, transformations, positioning, and other current conditions still override baseline values when applicable.

${pieces.join("\n")}

[/ARC RELEVANT STORY CARDS]
`;
    }
  }


  /*
   * ============================================================
   * AUTOMATIC LOOP DETECTION
   * ============================================================
   */

  const recentAI =
    historyList
      .filter(
        action =>
          action &&
          action.type ===
            "continue" &&
          action.text
      )
      .slice(-2);


  let loopRisk =
    false;


  if (
    recentAI.length ===
      2
  ) {
    const first =
      new Set(
        normalizeWords(
          recentAI[0].text
        )
      );


    const second =
      new Set(
        normalizeWords(
          recentAI[1].text
        )
      );


    if (
      first.size >= 12 &&
      second.size >= 12
    ) {
      let shared =
        0;


      for (
        const word of first
      ) {
        if (
          second.has(
            word
          )
        ) {
          shared++;
        }
      }


      const union =
        first.size +
        second.size -
        shared;


      const similarity =
        union
          ? shared /
            union
          : 0;


      loopRisk =
        similarity >=
        0.72;
    }
  }


  /*
   * ============================================================
   * BUILD DIRECTIVES
   * ============================================================
   */

  let directives =
    CORE_RULES +
    "\n" +
    ANTI_REPEAT;


  if (
    combatActive
  ) {
    directives +=
      "\n" +
      COMBAT_RULES;
  }


  if (
    relevantCardsBlock
  ) {
    directives +=
      "\n" +
      relevantCardsBlock;
  }


  if (
    loopRisk
  ) {
    directives +=
      "\n" +
      LOOP_BREAKER;
  }


  /*
   * ============================================================
   * CONTEXT PLACEMENT
   * ============================================================
   *
   * Desired order:
   *
   * Plot Essentials / Memory
   * ↓
   * Rules
   * ↓
   * Missing relevant Story Cards
   * ↓
   * Recent story
   * ↓
   * Latest action
   *
   * This keeps the newest narrative closest to generation.
   */


  const memoryLength =
    Math.min(
      info.memoryLength ||
        0,
      cleanedText.length
    );


  /*
   * Preserve AI Dungeon's Plot Essentials / memory area.
   */

  const memoryPart =
    memoryLength
      ? cleanedText.slice(
          0,
          memoryLength
        )
      : "";


  let storyPart =
    memoryLength
      ? cleanedText.slice(
          memoryLength
        )
      : cleanedText;


  const maxChars =
    info.maxChars ||
    (
      cleanedText.length +
      directives.length +
      1000
    );


  const separators =
    2;


  const availableStoryChars =
    Math.max(
      0,
      maxChars -
        memoryPart.length -
        directives.length -
        separators
    );


  /*
   * Preserve newest history if trimming is required.
   */

  storyPart =
    availableStoryChars >
      0
      ? storyPart.slice(
          -availableStoryChars
        )
      : "";


  return {
    text:
      [
        memoryPart,
        directives,
        storyPart
      ]
        .filter(Boolean)
        .join("\n")
  };
};


modifier(text);
