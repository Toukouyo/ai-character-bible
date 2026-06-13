
function getValue(id){
    return document.getElementById(id).value.trim();
}

function getCheckedValues(className){
    return [...document.querySelectorAll("." + className + ":checked")]
        .map(item => item.value);
}

function updateRangeValue(id){
    document.getElementById(id + "Value").textContent = document.getElementById(id).value;
}

function toggleClothes(){
    const onesuit = getValue("onesuit");
    const top = document.getElementById("top");
    const bottom = document.getElementById("bottom");
    const area = document.getElementById("topBottomArea");

    if(onesuit !== ""){
        top.disabled = true;
        bottom.disabled = true;
        top.value = "";
        bottom.value = "";
        area.classList.add("disabled");
    }else{
        top.disabled = false;
        bottom.disabled = false;
        area.classList.remove("disabled");
    }
}

function getCharacterData(){
    const customPersonality = getValue("customPersonality")
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

    return {
        name: getValue("name"),
        age: getValue("age"),
        gender: getValue("gender"),

        body: {
            heightCm: getValue("height"),
            weightKg: getValue("weight"),
            bustCm: getValue("bust"),
            waistCm: getValue("waist"),
            hipsCm: getValue("hips")
        },

        hair: {
            length: getValue("hairLength"),
            color: getValue("hairColor"),
            texture: getValue("hairTexture")
        },

        appearance: {
            face: getValue("face"),
            expression: getValue("expression"),
            hat: getValue("hat"),
            neck: getValue("neck"),
            piercings: getCheckedValues("piercing")
        },

        clothing: {
            onesuit: getValue("onesuit"),
            top: getValue("top"),
            bottom: getValue("bottom"),
            hand: getValue("hand"),
            leg: getValue("leg"),
            shoes: getValue("shoes")
        },

        personality: [
            ...getCheckedValues("personality"),
            ...customPersonality
        ]
    };
}

function generatePrompt(){
    const data = getCharacterData();

    let promptParts = [
        "character design",
        data.name,
        data.age ? data.age + " years old" : "",
        data.gender,

        data.body.heightCm ? data.body.heightCm + " cm tall" : "",
        data.body.weightKg ? data.body.weightKg + " kg" : "",
        data.body.bustCm && data.body.waistCm && data.body.hipsCm
            ? data.body.bustCm + "-" + data.body.waistCm + "-" + data.body.hipsCm + " body measurements"
            : "",

        data.hair.length,
        data.hair.color,
        data.hair.texture,

        data.appearance.face,
        data.appearance.expression,
        data.appearance.hat,
        data.appearance.neck,
        ...data.appearance.piercings,

        data.clothing.onesuit,
        data.clothing.top,
        data.clothing.bottom,
        data.clothing.hand,
        data.clothing.leg,
        data.clothing.shoes,

        ...data.personality
    ];

    document.getElementById("output").value = promptParts
        .filter(item => item && item !== "None")
        .join(", ");
}

function copyPrompt(){
    const text = getValue("output");

    if(!text){
        alert("请先生成Prompt");
        return;
    }

    navigator.clipboard.writeText(text);
    alert("已复制");
}

function saveJSON(){
    const data = getCharacterData();
    const json = JSON.stringify(data, null, 2);

    const blob = new Blob([json], {type: "application/json"});
    const url = URL.createObjectURL(blob);

    const fileName = data.name ? data.name + ".json" : "character.json";

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(url);
}

function changeLanguage(){
    alert("这一版先把语言放到右上角。真正切换界面文本可以下一版做。");
}

toggleClothes();
