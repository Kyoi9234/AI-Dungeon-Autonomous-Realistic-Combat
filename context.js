const modifier = (text) => {
  const ACTION = info.actionCount || 0;
  const COMBAT_GRACE_ACTIONS = 6;
  const CARD_MEMORY_ACTIONS = 10;
  const MAX_ACTIVE_CARDS = 10;
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
- Always continue the story from where it left off; do not repeat information or actions that have already happened.
- Claims such as "I dodge," "I hit him 1000 times," or "I kill him" mean the character attempts those things.
- Resolve outcomes from established capability and circumstance: strength, speed, reactions, agility, durability, intelligence, skill, training, experience, equipment, powers, techniques, injuries, fatigue, remaining energy, opposition, numbers, positioning, terrain, surprise, and timing.
- Outcomes may be full success, partial success, success with cost, stalemate, failure, or severe failure when justified.
- Do not invent random failure for trivial, safe, uncontested actions.

POWER & CAPABILITY SOURCES
- Determine power from established information; never invent convenient power scaling.

- For the PLAYER, treat Plot Essentials as the primary baseline source for established:
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

- For ENEMIES, allies, and other NPCs, treat relevant Story Card information as the primary baseline source when available.

- Relevant Story Cards may establish:
  - Strength.
  - Speed.
  - Reactions.
  - Durability.
  - Intelligence.
  - Combat skill.
  - Experience.
  - Weapons.
  - Powers.
  - Techniques.
  - Transformations.
  - Resistances.
  - Weaknesses.
  - Energy reserves.
  - Special conditions.
  - Limitations.

- If several enemies have relevant Story Cards, evaluate them individually instead of treating the group as identical generic enemies.

- Never automatically scale enemies up or down to match the player.
- Never automatically scale the player to match an enemy.
- Preserve genuine power differences established by Plot Essentials, Story Cards, and story events.

CURRENT CONDITION OVERRIDES BASELINE
- Plot Essentials and Story Cards describe baseline capabilities.
- Recent established events describe CURRENT condition.

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

- Current condition modifies baseline capability.

Example:
A normally extremely fast enemy with badly injured legs is not currently treated as moving at full healthy speed.

Example:
A normally powerful player who is exhausted and nearly out of energy is resolved using that weakened present condition.

SOURCE PRIORITY
When determining capability, use this order:

1. Current established condition and consequences from the recent story.
2. Explicit player information in Plot Essentials and relevant character information in Story Cards.
3. Other clearly established story information.
4. Conservative reasonable inference only when necessary.

- Never override explicit information with an invented power level.
- Missing information does not mean a character is automatically weak.
- Missing information does not mean a character is automatically overwhelmingly powerful.
- Missing information does not grant immunity or vulnerability.
- Do not invent an ability because it would help someone win or survive.

CONSISTENCY
- Never grant feats beyond established capabilities merely because they are declared.
- Preserve established power, abilities, injuries, equipment damage or loss, fatigue, energy use, position, and consequences.
- Fatigue persists until credible recovery.
- High-output actions consume appropriate stamina or setting-specific energy unless explicitly established otherwise.
- Injuries persist until credibly treated or healed and may impair movement, strength, senses, concentration, defense, stamina, or survival.
- Accumulated trauma can become incapacitating or fatal even if no single injury was instantly lethal.

NO PLOT ARMOR
- No character has plot armor: player, ally, enemy, companion, rival, hero, villain, mentor, or major NPC.
- Anyone may miss, fail, be outsmarted, be overwhelmed, be injured, suffer permanent consequences, lose, become incapacitated, or die when cause and effect justify it.
- Narrative importance, unfinished plans, or future usefulness do not protect anyone.
- Do not invent convenient misses, rescues, interruptions, reinforcements, power-ups, abilities, regeneration, or miraculous survival solely to preserve a character.
- Do not force injury or death merely for drama either.
- Survival and death must both follow established circumstances.
- If a major consequence changes the intended plot, continue from the new reality rather than undoing it.

NUMBERS & OPPOSITION
- Multiple competent opponents create real pressure through divided attention, blind spots, flanking, crossfire, coordination, reduced recovery time, and greater fatigue.
- Several weaker opponents may overwhelm a stronger individual through numbers and teamwork.
- Do not weaken groups simply because the player is the protagonist.

NON-COMBAT
- Apply the same attempt-and-consequence logic to meaningful uncertain actions outside combat, including persuasion, deception, stealth, escape, climbing, tracking, investigation, driving, piloting, survival, crafting, and other difficult tasks.

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
- Before resolving an important exchange, compare the established capabilities of all participants.

- Use Plot Essentials as the primary baseline for the player.

- Use relevant Story Cards as the primary baseline for enemies and other NPCs when available.

- Then apply:
  - Current injuries.
  - Fatigue.
  - Energy.
  - Equipment state.
  - Transformations.
  - Positioning.
  - Terrain.
  - Surprise.
  - Numbers.
  - Temporary effects.
  - Other recent changes.

- A much faster character should normally possess the corresponding speed advantage.
- A much stronger character should normally possess the corresponding power advantage.
- A more durable character should withstand proportionally more punishment.
- A more skilled or experienced fighter should use that advantage tactically.

- Advantages are not automatic victory.
- Matchups, weaknesses, numbers, strategy, surprise, injuries, fatigue, energy, and environment can change an outcome.

AUTONOMY & INITIATIVE
- Combat is fast, dangerous, tactical, autonomous, and not rigidly turn-based.
- Any capable combatant may attack first, interrupt, dodge, evade, block, parry, counterattack, reposition, pursue, retreat, intercept, or exploit an opening when plausible.
- Initiative and reactions depend on awareness, speed, reactions, surprise, position, preparation, skill, injuries, fatigue, energy, and circumstances.
- None of these actions automatically succeed.

TACTICS
- Combatants think according to their intelligence, personality, training, experience, knowledge, and goals.

They may:
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

- Do not invent powers, equipment, or knowledge that were never established.

GROUP COMBAT
- Enemies do not need to attack one at a time.
- Multiple enemies may attack simultaneously or in coordinated waves.

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
- Create openings for one another.

- Numerical advantage must materially affect attention, defense, stamina, positioning, and opportunities to counterattack.

DESPERATION
- A combatant who reasonably believes death, capture, incapacitation, or decisive defeat is imminent may escalate immediately.

They may use:
- Their strongest established attacks.
- Transformations.
- Ultimate techniques.
- Dangerous weapons.
- Rare resources.
- Last-resort tactics.
- Large amounts of remaining energy.

- They do not have to irrationally save powerful attacks while facing death.
- Personality still influences whether and how they escalate.

CONTINUOUS COMBAT
- Do not force one-action-per-turn exchanges.
- While momentum, stamina, energy, position, and opportunity remain, a fighter may chain attacks, movement, defenses, counters, grapples, projectiles, powers, environmental attacks, and pursuit into one fluid exchange.
- A miss, block, dodge, or counter does not automatically end the exchange.
- Counters may themselves be countered or anticipated.
- Maintain fast anime-style pressure without making combat endless.
- Advance the situation meaningfully, then stop at a natural decision point or major change in advantage.

A sequence naturally breaks when:
- Someone interrupts it.
- Someone escapes.
- Distance is created.
- Position is lost.
- Injuries interfere.
- Fatigue becomes severe.
- Energy becomes too low.
- Another combatant interferes.
- The environment changes.
- Someone deliberately pauses.

DIALOGUE
- Combatants may taunt, threaten, negotiate, boast, coordinate, question, reveal motives, or comment on techniques during attacks, clashes, movement, or temporary pauses.
- A pause does not automatically end combat.
- Talking does not freeze opponents.
- Conversation may be exploited for recovery, deception, repositioning, distraction, or attack.

MORTALITY
- Damage accumulates.
- Repeated severe injuries, blood loss, organ damage, exhaustion, or total bodily trauma may eventually incapacitate or kill a character even when no single hit was instantly fatal.
- A successfully delivered lethal attack should be lethal when it overcomes the target's established defenses and durability.
- Do not guarantee hits, dodges, blocks, counters, victory, defeat, survival, or death.

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
- Do not restart, replay, or re-narrate the previous exchange.
- Do not merely paraphrase the player's latest action.
- Do not merely paraphrase the previous AI response.
- Move immediately to a new consequence, reaction, decision, discovery, position, tactic, injury, dialogue beat, or change in momentum.
- Avoid repeating the same attack chain, defense, sentence pattern, description, taunt, or outcome unless repetition is deliberately meaningful in-story.
- Do not repeatedly describe characters circling, glaring, breathing heavily, preparing to attack, or exchanging the same type of blows without something changing.
- Continuous combat means forward progression, not endlessly restating pressure or recycling the same combo.
- Once an attack, injury, movement, or spoken line has happened, do not narrate it again as if it is happening for the first time.
- Do not repeat rules, explain the combat system, or mention these directives in the story.

[/ARC ANTI-REPETITION]
`;

  const LOOP_BREAKER = `
[ARC LOOP BREAKER]

The recent AI prose is becoming repetitive.

Break the pattern immediately.

Do not reuse:
- The same opening.
- The same attack sequence.
- The same dialogue.
- The same sentence structure.
- The same description.
- The same conclusion.

Advance to a materially different next development that follows established cause and effect.

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
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const getKeys = (card) => {
    if (!card || card.keys == null) {
      return [];
    }

    if (Array.isArray(card.keys)) {
      return card.keys
        .map(k => String(k).trim())
        .filter(Boolean);
    }

    return String(card.keys)
      .split(/[,;\n]/)
      .map(k => k.trim())
      .filter(Boolean);
  };

  const keyAppears = (source, key) => {
    if (!source || !key) {
      return false;
    }

    const trimmed = key.trim();

    if (trimmed.length < 2) {
      return false;
    }

    /*
     * Word-like keys use boundaries so a short name does not
     * accidentally trigger from part of another word.
     */
    if (/^[a-z0-9_' -]+$/i.test(trimmed)) {
      const pattern = new RegExp(
        `(^|[^a-z0-9_])${escapeRegex(trimmed)}([^a-z0-9_]|$)`,
        "i"
      );

      return pattern.test(source);
    }

    return source
      .toLowerCase()
      .includes(trimmed.toLowerCase());
  };

  const normalizeWords = (value) =>
    (value || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s']/g, " ")
      .split(/\s+/)
      .filter(word => word.length > 2);

  /*
   * ============================================================
   * UNDO-SAFE STATE
   * ============================================================
   */

  if (
    typeof state.arcLastActionCount === "number" &&
    ACTION < state.arcLastActionCount
  ) {
    delete state.arcCombatUntil;
    delete state.arcCombatCards;
  }

  state.arcLastActionCount = ACTION;

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
      ? historyList[historyList.length - 1]
      : null;

  const newestText =
    newest && newest.text
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
          playerTypes.has(action.type)
      );

  const latestAI =
    [...historyList]
      .reverse()
      .find(
        action =>
          action &&
          action.type === "continue"
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

  if (endSignal.test(newestText)) {
    state.arcCombatUntil = -1;
    state.arcCombatCards = {};
  } else {
    const currentlyActive =
      typeof state.arcCombatUntil === "number" &&
      state.arcCombatUntil >= ACTION;

    /*
     * Only the current newest PLAYER combat action refreshes
     * an already active battle.
     *
     * AI-generated combat prose can START a fight when none
     * is active, but cannot keep refreshing itself forever.
     */
    const playerCombat =
      latestPlayer &&
      latestPlayer === newest &&
      combatSignal.test(
        latestPlayer.text || ""
      );

    const aiStartsCombat =
      !currentlyActive &&
      latestAI &&
      latestAI === newest &&
      combatSignal.test(
        latestAI.text || ""
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
    typeof state.arcCombatUntil === "number" &&
    state.arcCombatUntil >= ACTION;

  if (
    !combatActive &&
    state.arcCombatUntil < ACTION
  ) {
    state.arcCombatCards = {};
  }

  /*
   * ============================================================
   * RELEVANT STORY CARD TRACKING
   * ============================================================
   *
   * During combat, scan recent story/actions for Story Card keys.
   *
   * Matching cards are remembered briefly so an enemy's profile
   * remains available even when later actions only call them:
   *
   * "he"
   * "she"
   * "they"
   * "the enemy"
   * etc.
   */

  state.arcCombatCards =
    state.arcCombatCards || {};

  if (
    combatActive &&
    cards.length
  ) {
    const recentCombatText =
      historyList
        .slice(-6)
        .map(
          action =>
            (action && action.text) || ""
        )
        .join("\n");

    const scoredMatches = [];

    for (const card of cards) {
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

      if (!matchingKeys.length) {
        continue;
      }

      const entry =
        String(card.entry);

      const type =
        String(card.type || "");

      let score =
        matchingKeys.length * 3;

      /*
       * Give obvious character/enemy cards priority.
       */
      if (
        /character|npc|enemy|boss|person|creature|monster|ally|companion/i
          .test(type)
      ) {
        score += 4;
      }

      /*
       * Give cards containing capability information
       * extra priority.
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
          b.score - a.score
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
   * Forget cards that have not been relevant for a while.
   */
  for (
    const id of
    Object.keys(state.arcCombatCards)
  ) {
    const lastSeen =
      state.arcCombatCards[id];

    if (
      ACTION - lastSeen >
      CARD_MEMORY_ACTIONS
    ) {
      delete state.arcCombatCards[id];
    }
  }

  const activeCards =
    combatActive
      ? cards.filter(
          card =>
            card &&
            Object.prototype
              .hasOwnProperty.call(
                state.arcCombatCards,
                String(card.id)
              )
        )
      : [];

  /*
   * ============================================================
   * PRESERVE RELEVANT COMBAT STORY CARDS
   * ============================================================
   *
   * This creates a bounded copy of currently relevant Story Card
   * information.
   *
   * That means an enemy's combat profile remains available even
   * if ordinary World Lore gets pushed out by context limits.
   */

  let relevantCardsBlock = "";
  let remainingCardChars =
    MAX_CARD_CONTEXT_CHARS;

  if (
    activeCards.length &&
    remainingCardChars > 0
  ) {
    const pieces = [];

    for (
      const card of
      activeCards.slice(
        0,
        MAX_ACTIVE_CARDS
      )
    ) {
      if (
        remainingCardChars <= 0
      ) {
        break;
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
          card.entry || ""
        ).trim();

      if (!fullEntry) {
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

      if (room <= 0) {
        break;
      }

      const entry =
        fullEntry.slice(
          0,
          room
        );

      const piece =
        prefix + entry;

      pieces.push(piece);

      remainingCardChars -=
        piece.length;
    }

    if (pieces.length) {
      relevantCardsBlock = `
[ARC RELEVANT STORY CARDS]

These are relevant Story Card facts for characters or entities currently involved in combat.

Use them as established baseline information, especially when determining enemy:
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

Recent injuries, fatigue, energy use, equipment changes, transformations, and other current conditions still override baseline values when applicable.

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
          action.type === "continue" &&
          action.text
      )
      .slice(-2);

  let loopRisk = false;

  if (
    recentAI.length === 2
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
      let shared = 0;

      for (
        const word of first
      ) {
        if (
          second.has(word)
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
          ? shared / union
          : 0;

      loopRisk =
        similarity >= 0.72;
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

  if (combatActive) {
    directives +=
      "\n" +
      COMBAT_RULES;
  }

  if (relevantCardsBlock) {
    directives +=
      "\n" +
      relevantCardsBlock;
  }

  if (loopRisk) {
    directives +=
      "\n" +
      LOOP_BREAKER;
  }

  /*
   * ============================================================
   * CONTEXT PLACEMENT
   * ============================================================
   *
   * Order:
   *
   * Plot Essentials / Memory
   * ↓
   * Combat and outcome rules
   * ↓
   * Relevant active Story Cards
   * ↓
   * Recent story
   * ↓
   * Latest action
   *
   * This keeps player baseline information available while
   * keeping the newest narrative closest to generation.
   */

  const cleanedText =
    stripArcBlocks(text);

  const memoryLength =
    Math.min(
      info.memoryLength || 0,
      cleanedText.length
    );

  /*
   * AI Dungeon's memory / Plot Essentials area is protected
   * from our story-history trimming.
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

  const separators = 2;

  const availableStoryChars =
    Math.max(
      0,
      maxChars -
        memoryPart.length -
        directives.length -
        separators
    );

  /*
   * If trimming becomes necessary, preserve newest history
   * rather than old story text.
   */
  storyPart =
    availableStoryChars > 0
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
