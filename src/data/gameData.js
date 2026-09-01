export const gameData = {
  features: [
    "TDM mode with 40/60/120 kills match",
    "Battle Royale with 2 maps",
    "Download size 1GB or 1.2GB",
    "Capable to run on low end devices",
    "BR with 60/100 players",
    "100 player level",
    "Fast landing / loading",
    "Quick and comfortable matches",
    "Playtime rewards",
    "Stable guns",
    "Season and turn rewards",
    "Daily missions",
    "Weekly missions",
    "Monthly missions",
    "Time limited events",
    "Automated cars",
    "Good skins for cars etc.",
    "Cars with nitro",
    "Good skins in parachute",
    "Open maps for high speed cars",
    "Clubs, play with friends",
    "Simple user interface",
    "Simple controls",
    "Game can be played offline in Battle Royale mode",
    "Mainly bots",
    "Daily login rewards",
    "Monthly login calendar"
  ],
  modes: [
    "TDM / Ranked",
    "BR / Ranked",
    "Practice",
    "Solo / Solo",
    "Career",
    "Zombie",
    "Championship league BR",
    "Championship league MP",
    "Custom Rooms"
  ],
  currencies: [
    { id: "silver_credits", name: "Silver Credits", isPremium: false },
    { id: "gold_credits", name: "Gold Credits", isPremium: true },
    { id: "bronze_tokens", name: "Bronze Tokens", isPremium: false },
    { id: "silver_tokens", name: "Silver Tokens", isPremium: false },
    { id: "shadow_cards", name: "Shadow Cards", isPremium: true },
    { id: "trade_tokens", name: "Trade Tokens", isPremium: false }
  ],
  ranks: [
    { name: "Bronze 5", requiredPoints: 5000 },
    { name: "Silver 5", requiredPoints: 10000 },
    { name: "Gold 5", requiredPoints: 15000 },
    { name: "Platinum 4", requiredPoints: 21000 },
    { name: "Diamond 4", requiredPoints: 27000 },
    { name: "Elite 3", requiredPoints: 33000 },
    { name: "Master 3", requiredPoints: 39000 },
    { name: "Grand Master 3", requiredPoints: 45000 },
    { name: "Mythical 3", requiredPoints: 51000 },
    { name: "Almighty 1", requiredPoints: 55000 }
  ],
  leaderboards: [
    "Top 1", "Top 5", "Top 10", "Top 50", "Top 100", 
    "Top 250", "Top 500", "Top 1000", "Top 1500", 
    "Top 3000", "Top 5000", "Top 10,000"
  ],
  locations: {
    cultural: ["Old Fort Ruins", "Stone Bridge", "Battlefield Memorial Light", "Colonial House Ruins", "Abandoned Church", "World War Trench", "Wind Tower", "Prisoner Cabin Area"],
    urban: ["City alley", "Parking garage", "Overpass bridge", "Train station", "Urban rooftops", "Subway platforms", "Bus terminal", "Shopping district", "Gas station", "Construction zone", "Abandoned apartment", "School yard", "Office complex", "Police station", "Public park", "Military courtyard", "Industrial warehouse", "Stadium bleachers", "Roundabout", "Old Town Square"],
    industrial: ["Power station", "Cement plant", "Oil refinery", "Lumber yard", "Quarry pit", "Train yard", "Tank depot", "Rail bridge", "Highway rest stop", "Grain terminal"],
    military: ["Army barracks", "Outpost", "Shooting range", "Fortified checkpoint", "Abandoned airfield", "Hangar bay", "Radar station", "Vehicle depot", "Missile silo parade grounds"],
    natural: ["River crossing", "Mountain ridge", "Rocky plateau", "Sandy beach", "Dense forest", "Snowy slope", "Open grasslands", "Muddy swamp", "Salt marsh", "Rolling hills", "Desert dune field", "Pine forest", "Offside path", "Riverbank", "Alpine meadow", "Canyon floor", "Dry lakebed", "Hilltop outlook", "Glacier edge", "Waterfall pool", "Water fountains", "Ponds and lakes"],
    waterBased: ["Dockyard", "Fishing pier", "Island lake shore", "Marshland boardwalk", "River dam", "Marine harbour", "Boat launcher", "Coral lake", "Ferry terminal", "Tidal flats"],
    rural: ["Countryside village", "Farmstead", "Grain silo field", "Barnyard", "Windmill site", "Chicken coop area", "Vineyard fields", "Apple orchard", "Road intersection", "Tractor depot"]
  },
  weapons: {
    preEquipped: ["Swords with plasma energy", "Unbreakable rifle", "Mythical bow & arrow", "Grenades", "Dragon ball", "Scyther", "Flame axe", "World chain", "Plasma grenade", "Flame sword", "Plasma cannon", "Laser gun", "Lighting gun", "Lighting whip", "Crystal katana", "Molotov", "Explosive crossbow", "Soul gauntlet", "Shadow rifle", "Spinning blade", "Double sworded rope", "Square fire gun", "Pentis blade", "Crystal axe", "Aura gun", "Killing birds", "Clones", "Laser cutter", "Blaster weapon", "Bulk hole gun", "Petroening ball", "Petroening grenade", "Smoke cloud"],
    airDrop: ["Launcher", "Launcher 2", "Vest / Helmet", "Pro gun", "Laser gun", "BG rings", "Med kits", "Grenades", "Snopes", "Shieldboard", "Snippers", "Rifles", "Defenders"],
    crates: ["2 Guns", "2 Bomb grenades", "2 Snopes", "2 Mols", "1 Vest", "1 Helmet", "200 Bullets of each"],
    classes: ["Standard", "Supreme", "Special"]
  },
  vehicles: ["Monster truck", "Race car 1", "Race car 2", "Sports bike", "Off tuners", "Container trucks", "Jeep", "Mini truck", "Tanks", "Hot air balloon", "Helicopters", "One seated car", "Yatch", "Turbo boat", "Toy car after map", "Boats in little laydle"],
  addons: ["4 Tractors", "4 Horses", "Land mines", "Tanks and rocket launchers (land)", "Barrel ramps", "Building jumps", "Bridge opening upwards", "Tunnels", "Train / hot air balloon"],
  pets: {
    waysToObtain: ["Pass", "Daily login", "Direct purchase", "Events", "Promo codes"],
    items: ["Pet skins", "Pet emotes", "Pet upgrades"]
  },
  animals: ["Gorilla", "Rhino", "Boar", "Horse", "Elephant", "Sea turtle", "Wolves"],
  baseStats: ["Health", "Attack", "Defense", "Range", "Reflect", "Resistance", "Regeneration"],
  injuries: ["Health Injuries", "Attack Injuries", "Defense Injuries", "Range Injuries", "Reflex Injuries", "Resistance Injuries", "Regeneration Injuries"],
  store: {
    wearables: ["Shirts", "Shoes", "Wings", "Cups", "Mask"],
    packs: ["Punk Proton BR", "Punk Proton MP", "Double Punk XP BR", "Double Punk XP MP", "Overdose Spells BR", "Overdose Spells MP", "Inverse RC Item BR", "Inverse RC Item MP"],
    realMoneyItems: ["Silver coins", "Gold coins", "Shadow cards", "Solar tokens", "Junior tokens", "Gun skins", "Car skins", "Boat skins", "Player skins", "Parachute skins", "Defender skins", "Glider skins", "Wheel skins", "Wheel Jitters", "Battle Pass", "Separate skin bundles", "Gravity skins", "Boy skins", "Skateboard skins", "Weapon skins", "Emotes", "Bundles", "Pets", "Pet skins", "Pet emotes", "Pet upgrades", "Themes", "Avatar frame", "Banner", "Banner frames", "Flairs", "Tractor skins", "Horse skins"],
    terrainSkins: ["Bush skins", "Tree skins", "Water skins", "Snow skins", "Stone skins", "Road skins"],
    otherSkins: ["Kill animation skins (MP)", "Kill animation skins (BR)", "Air drop skins", "Enemy guide skins", "Custom victory celebration skins"]
  },
  bossChamp: {
    features: ["Powerful", "Can fly anywhere", "Need to be summoned", "Two alternate forms", "Sky will turn red", "One going from ground to sky", "Impossible to kill in normal matches", "All cars should be good looking", "High speed", "Unlimited nitro", "Stunt panels", "Boost panels", "Ending scene with boss champ will be there to create interest", "Purge of champions should be from level 1 to level 100", "Motivational tune and quotes to engage players", "When a player reaches Almighty rank there will be an animation where the boss champ gives the almighty badge to the player who gets animated into his rank"]
  },
  settings: {
    graphics: ["Ultra", "High", "Medium", "Low", "Minimal"],
    options: ["FPS", "Screen resolution", "Graphics", "V Sync", "Full Screen", "Motion blur", "Bloom", "Shadow quality", "Reflections", "Depth of field", "Anti Aliasing"]
  },
  specialThings: ["Good weapon trailers", "Good battle animations", "Good nitro sounds", "Good nitro effects", "Good button clicks", "Smooth gameplay", "Smooth transformation of bosses", "Cross platform", "Greater rewards for higher rank", "Blue ray defenders", "Green ray defenders", "Kill animation skins", "Premium feel like Black Myth Wukong", "Cross platform", "Play store", "Windows store", "MS store", "App store", "Play station", "Microsoft XBox"],
  gameConcepts: ["Concept of Nijo", "Characters like Nijo", "Offline support", "Cover mode", "Clubs and Club Reputation points", "Clubs and Clash", "Dynamic weather system", "Concept of pets", "Separate BR and multiplayer mode including characters like Nijo", "There will be nothing in open. Everything will be in sealed crates"],
  problemsLimitations: ["Too much medical gravity", "Lack of cars skins", "Unoptimized bugs", "No bosses", "Complex user interface", "Low and buggy background", "No loot most of the time", "No pets", "No test servers", "No air drop", "No custom maps", "No anything like animation", "1) Rank push not supported", "2) Too much recalls"],
  afterDeath: ["1) Basic heating issues", "2) Unreliable"],
  additionalIssues: ["1) Multi player maps are too big", "2) Have complex user interface", "3) Button icons not good", "4) Too many multiplayer maps", "5) Too many BR maps (Not required)"],
  drawbacksOfOthers: ["1) Changing emotes", "2) Low end maps", "3) Changes take time to appear", "4) No inbuilt lobby maps", "5) Clown updates", "6) Low end guns", "7) Too much recall", "8) No trade skins", "9) No offline support", "10) Laggy entry"],
  lowTdmOptions: ["1) Faded grass", "2) Clean events", "3) Low end cars", "4) Lack of cars", "5) Lack of other vehicles"],
  mainGameVariations: ["Main game", "Main game Lite", "Main game Test server 1", "Main game Test server 2", "Main game custom maps"],
  obstacles: ["Bushes", "Fence", "Tree Stumps", "Bridge is pushed", "Hat", "Traffic cones", "Road", "Snow"]
};
