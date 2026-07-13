---
title: "Designing the WH40k Tournament Analyzer"
description: "How I'm approaching the architecture of a Warhammer 40k competitive meta analysis tool, from data ingestion to statistical modeling."
pubDate: 2026-07-10
tags: ["warhammer", "data-analysis", "project"]
---

One of the projects I've been working on is a **Warhammer 40k Tournament Analyzer**. The goal is simple: use real tournament data to understand what's actually working in the competitive meta, rather than relying on gut feelings or forum opinions.

## The Problem

Warhammer 40k is a game with enormous complexity. Hundreds of units, countless list builds, multiple mission types, and a meta that shifts with every balance patch. How do you figure out what's "good" when the answer changes depending on the mission, the matchup, and the player?

## Data Source: Best Coast Pairing

The foundation is data from **Best Coast Pairing**, a platform that records online tournaments. From it, I can extract:

- Win/loss records
- Points scored
- Missions played
- Opponents faced
- Full list composition
- Results per mission

## Mission-Based Role Classification

One of the key design decisions is classifying performance by **mission type**:

- **Take and Hold** - Control objectives
- **Purge the Foe** - Kill-based scoring
- **Disruption** - Interference and denial
- **Reconnaissance** - Scouting and intel
- **Priority Assets** - Objective control

Each army performs differently depending on the mission. A list that dominates in Purge the Foe might struggle in Reconnaissance. Tracking this separately gives a much richer picture than a single win rate.

## The Architecture Challenge

The hardest part is **data aggregation**. In a single tournament, an army might play 5 rounds across 3 different mission types. How do you aggregate that data meaningfully?

Some questions I'm still working through:

- Should win rate be weighted by opponent strength?
- How do you measure consistency vs. ceiling?
- What does "optimal" even mean in this context?

These are the kinds of problems I enjoy solving. More updates coming as the project progresses.
