// UI_LABELS stores only interface text: section titles, field labels, buttons, and alerts.
// Selectable character attributes live in OPTION_LABELS below, so adding a new tag only requires editing one object.
const UI_LABELS = {
    "appTitle": {
        "en": "Character Generator",
        "zh": "角色生成器",
        "ja": "キャラクター生成器"
    },
    "interfaceLanguage": {
        "en": "Interface Language",
        "zh": "界面语言",
        "ja": "表示言語"
    },
    "basicInfo": {
        "en": "Basic Info",
        "zh": "基本信息",
        "ja": "基本情報"
    },
    "name": {
        "en": "Character Name",
        "zh": "角色名称",
        "ja": "キャラクター名"
    },
    "age": {
        "en": "Age",
        "zh": "年龄",
        "ja": "年齢"
    },
    "gender": {
        "en": "Gender",
        "zh": "性别",
        "ja": "性別"
    },
    "height": {
        "en": "Height",
        "zh": "身高",
        "ja": "身長"
    },
    "weight": {
        "en": "Weight",
        "zh": "体重",
        "ja": "体重"
    },
    "nationalityStatus": {
        "en": "Nationality / Ethnicity",
        "zh": "国籍 / 族裔",
        "ja": "国籍 / エスニシティ"
    },
    "chinese": {
        "en": "Chinese",
        "zh": "中",
        "ja": "中"
    },
    "british": {
        "en": "British",
        "zh": "英",
        "ja": "英"
    },
    "american": {
        "en": "American",
        "zh": "美",
        "ja": "米"
    },
    "japanese": {
        "en": "Japanese",
        "zh": "日",
        "ja": "日"
    },
    "french": {
        "en": "French",
        "zh": "法",
        "ja": "仏"
    },
    "black": {
        "en": "Black",
        "zh": "黑人",
        "ja": "黒人"
    },
    "nationalitySection": {
        "en": "Nationality",
        "zh": "国籍",
        "ja": "国籍"
    },
    "ethnicitySection": {
        "en": "Ethnicity",
        "zh": "族裔",
        "ja": "エスニシティ"
    },
    "customNationality": {
        "en": "Custom Nationality",
        "zh": "自定义国籍",
        "ja": "カスタム国籍"
    },
    "customEthnicity": {
        "en": "Custom Ethnicity",
        "zh": "自定义族裔",
        "ja": "カスタム・エスニシティ"
    },
    "skinTone": {
        "en": "Skin Tone",
        "zh": "肤色",
        "ja": "肌の色"
    },
    "occupation": {
        "en": "Occupation / Role",
        "zh": "职业 / 身份",
        "ja": "職業 / 役割"
    },
    "customOccupation": {
        "en": "Custom Occupation / Role",
        "zh": "自定义职业 / 身份",
        "ja": "カスタム職業 / 役割"
    },
    "hair": {
        "en": "Hair",
        "zh": "头发",
        "ja": "髪"
    },
    "hairLength": {
        "en": "Hair Length",
        "zh": "发型长度",
        "ja": "髪の長さ"
    },
    "hairColor": {
        "en": "Hair Color",
        "zh": "发色",
        "ja": "髪色"
    },
    "hairTexture": {
        "en": "Hair Texture",
        "zh": "发质",
        "ja": "髪質"
    },
    "hairCondition": {
        "en": "Hairstyle / Condition",
        "zh": "发型状态",
        "ja": "髪型 / 状態"
    },
    "bangsShape": {
        "en": "Bangs Shape",
        "zh": "刘海形状",
        "ja": "前髪の形"
    },
    "hairStrands": {
        "en": "Hair Strands",
        "zh": "发丝细节",
        "ja": "髪の束感"
    },
    "notSelected": {
        "en": "Not selected",
        "zh": "未选择",
        "ja": "未選択"
    },
    "none": {
        "en": "None",
        "zh": "无",
        "ja": "なし"
    },
    "bodyShape": {
        "en": "Body",
        "zh": "身材",
        "ja": "スタイル"
    },
    "bodyTypeLabel": {
        "en": "Body Type",
        "zh": "体型标签",
        "ja": "体型"
    },
    "breastShapeLabel": {
        "en": "Breast Shape",
        "zh": "胸形",
        "ja": "胸の形"
    },
    "hipShapeLabel": {
        "en": "Hip Shape",
        "zh": "臀形状",
        "ja": "ヒップの形"
    },
    "bust": {
        "en": "Bust",
        "zh": "胸围",
        "ja": "バスト"
    },
    "waist": {
        "en": "Waist",
        "zh": "腰围",
        "ja": "ウエスト"
    },
    "hips": {
        "en": "Hips",
        "zh": "臀围",
        "ja": "ヒップ"
    },
    "faceAndAccessories": {
        "en": "Face & Accessories",
        "zh": "面部与装饰",
        "ja": "顔と装飾"
    },
    "face": {
        "en": "Facial Features",
        "zh": "面部特征",
        "ja": "顔の特徴"
    },
    "eyeShape": { "en": "Eye Shape", "zh": "眼型", "ja": "目の形" },
    "eyeColor": { "en": "Eye Color", "zh": "眼色", "ja": "目の色" },
    "eyeGaze": { "en": "Gaze", "zh": "眼神", "ja": "眼差し" },
    "noseShape": { "en": "Nose", "zh": "鼻子", "ja": "鼻" },
    "lipsShape": { "en": "Lips", "zh": "嘴唇", "ja": "唇" },
    "faceShape": { "en": "Face Shape", "zh": "脸型", "ja": "顔の形" },
    "skinTexture": { "en": "Skin Texture", "zh": "皮肤质感", "ja": "肌の質感" },
    "skinMarks": { "en": "Skin Marks", "zh": "皮肤标记", "ja": "肌の特徴" },
    "skinScar": { "en": "Scars", "zh": "疤痕", "ja": "傷跡" },
    "expression": {
        "en": "Expression",
        "zh": "常用表情",
        "ja": "表情"
    },
    "hat": {
        "en": "Hat",
        "zh": "帽子",
        "ja": "帽子"
    },
    "neck": {
        "en": "Neck Accessory",
        "zh": "颈部装饰",
        "ja": "首元の装飾"
    },
    "piercingStatus": {
        "en": "Piercings",
        "zh": "穿孔情况",
        "ja": "ピアス"
    },
    "clothing": {
        "en": "Clothing",
        "zh": "服装",
        "ja": "服装"
    },
    "onesuit": {
        "en": "One-piece Outfit",
        "zh": "连体衣",
        "ja": "ワンピース系"
    },
    "top": {
        "en": "Top",
        "zh": "上衣",
        "ja": "上着"
    },
    "bottom": {
        "en": "Bottom",
        "zh": "下衣",
        "ja": "下衣"
    },
    "underwear": {
        "en": "Underwear",
        "zh": "内衣",
        "ja": "下着"
    },
    "clothingMaterial": {
        "en": "Material",
        "zh": "材质",
        "ja": "素材"
    },
    "clothingPattern": {
        "en": "Pattern",
        "zh": "图案",
        "ja": "柄"
    },
    "clothingDetails": {
        "en": "Other",
        "zh": "其他",
        "ja": "その他"
    },
    "limbsAndShoes": {
        "en": "Limbs & Shoes",
        "zh": "四肢与鞋",
        "ja": "手足と靴"
    },
    "hand": {
        "en": "Hands",
        "zh": "手部",
        "ja": "手"
    },
    "leg": {
        "en": "Legs",
        "zh": "腿部",
        "ja": "脚"
    },
    "shoes": {
        "en": "Shoes",
        "zh": "鞋子",
        "ja": "靴"
    },
    "personalityTags": {
        "en": "Personality Tags",
        "zh": "性格标签",
        "ja": "性格タグ"
    },
    "customPersonality": {
        "en": "Custom Personality Tags",
        "zh": "自定义性格标签",
        "ja": "カスタム性格タグ"
    },
    "generatePrompt": {
        "en": "Generate Prompt",
        "zh": "生成Prompt",
        "ja": "Promptを生成"
    },
    "copyPrompt": {
        "en": "Copy Prompt",
        "zh": "复制Prompt",
        "ja": "Promptをコピー"
    },
    "saveJSON": {
        "en": "Save as JSON",
        "zh": "保存角色为JSON",
        "ja": "JSONとして保存"
    },
    "alertGenerateFirst": {
        "en": "Please generate a prompt first",
        "zh": "请先生成Prompt",
        "ja": "先にPromptを生成してください"
    },
    "alertCopied": {
        "en": "Copied",
        "zh": "已复制",
        "ja": "コピーしました"
    }
};

function buildTranslations(labelSource){
    const result = { zh: {}, en: {}, ja: {} };

    Object.entries(labelSource).forEach(([key, labels]) => {
        result.en[key] = labels.en || key;
        result.zh[key] = labels.zh || labels.en || key;
        result.ja[key] = labels.ja || labels.en || key;
    });

    return result;
}

const translations = buildTranslations(UI_LABELS);

// OPTION_LABELS stores selectable character tags.
// value is always English and is used in generated prompts / exported JSON.
// en, zh, and ja are display labels for the UI.
const OPTION_LABELS = {
    "americanNationality": {
        "value": "American nationality",
        "en": "American nationality",
        "zh": "美国",
        "ja": "アメリカ"
    },
    "analytical": {
        "value": "analytical",
        "en": "analytical",
        "zh": "理性",
        "ja": "理性的"
    },
    "angryExpression": {
        "value": "angry expression",
        "en": "angry expression",
        "zh": "生气",
        "ja": "怒った表情"
    },
    "assassin": {
        "value": "assassin",
        "en": "assassin",
        "zh": "杀手",
        "ja": "暗殺者"
    },
    "balletFlats": {
        "value": "ballet flats",
        "en": "ballet flats",
        "zh": "芭蕾平底鞋",
        "ja": "バレエシューズ"
    },
    "bandana": {
        "value": "bandana",
        "en": "bandana",
        "zh": "头巾",
        "ja": "バンダナ"
    },
    "barefoot": {
        "value": "barefoot",
        "en": "barefoot",
        "zh": "赤脚",
        "ja": "裸足"
    },
    "baseballCap": {
        "value": "baseball cap",
        "en": "baseball cap",
        "zh": "棒球帽",
        "ja": "野球帽"
    },
    "beanie": {
        "value": "beanie",
        "en": "beanie",
        "zh": "针织帽",
        "ja": "ニット帽"
    },
    "beret": {
        "value": "beret",
        "en": "beret",
        "zh": "贝雷帽",
        "ja": "ベレー帽"
    },
    "bikini": {
        "value": "bikini",
        "en": "bikini",
        "zh": "比基尼",
        "ja": "ビキニ"
    },
    "blackAfricanEthnicity": {
        "value": "Black African ethnicity",
        "en": "Black African ethnicity",
        "zh": "黑人/非洲",
        "ja": "黒人/アフリカ系"
    },
    "blackHair": {
        "value": "black hair",
        "en": "black hair",
        "zh": "黑发",
        "ja": "黒髪"
    },
    "blondeHair": {
        "value": "blonde hair",
        "en": "blonde hair",
        "zh": "金发",
        "ja": "金髪"
    },
    "blueHair": {
        "value": "blue hair",
        "en": "blue hair",
        "zh": "蓝发",
        "ja": "青髪"
    },
    "bobCut": {
        "value": "bob cut",
        "en": "bob cut",
        "zh": "波波头",
        "ja": "ボブカット"
    },
    "bodyTypeAthletic": {
        "value": "Athletic",
        "en": "Athletic",
        "zh": "运动员型",
        "ja": "アスリート体型"
    },
    "bodyTypeCurvy": {
        "value": "Curvy",
        "en": "Curvy",
        "zh": "丰满",
        "ja": "ふくよか"
    },
    "bodyTypeHourglass": {
        "value": "Hourglass",
        "en": "Hourglass",
        "zh": "沙漏型",
        "ja": "砂時計型"
    },
    "bodyTypeModel": {
        "value": "Model-like",
        "en": "Model-like",
        "zh": "模特",
        "ja": "モデル体型"
    },
    "bodyTypePetite": {
        "value": "Petite",
        "en": "Petite",
        "zh": "娇小",
        "ja": "小柄"
    },
    "bodyTypeSlender": {
        "value": "Slender",
        "en": "Slender",
        "zh": "纤细",
        "ja": "細身"
    },
    "bodyTypeSlim": {
        "value": "Slim",
        "en": "Slim",
        "zh": "苗条",
        "ja": "スリム"
    },
    "bodyTypeTallLean": {
        "value": "Tall and lean",
        "en": "Tall and lean",
        "zh": "修长",
        "ja": "背が高く細身"
    },
    "breastShapeAthletic": {
        "value": "athletic chest shape",
        "en": "athletic",
        "zh": "运动型",
        "ja": "アスリート型"
    },
    "breastShapeCloseSet": {
        "value": "close-set breast shape",
        "en": "close-set",
        "zh": "间距较近",
        "ja": "間隔が狭い"
    },
    "breastShapeNatural": {
        "value": "natural breast shape",
        "en": "natural",
        "zh": "自然",
        "ja": "自然"
    },
    "breastShapeRound": {
        "value": "round breast shape",
        "en": "round",
        "zh": "圆润",
        "ja": "丸みのある"
    },
    "breastShapeTeardrop": {
        "value": "teardrop breast shape",
        "en": "teardrop",
        "zh": "水滴形",
        "ja": "しずく型"
    },
    "breastShapeWideSet": {
        "value": "wide-set breast shape",
        "en": "wide-set",
        "zh": "间距较宽",
        "ja": "間隔が広い"
    },
    "hipShapeAthletic": {
        "value": "athletic hip shape",
        "en": "athletic",
        "zh": "运动型",
        "ja": "アスリート型"
    },
    "hipShapeHeart": {
        "value": "heart-shaped hips",
        "en": "heart-shaped",
        "zh": "心形",
        "ja": "ハート型"
    },
    "hipShapeNarrow": {
        "value": "narrow hips",
        "en": "narrow",
        "zh": "窄臀",
        "ja": "細め"
    },
    "hipShapePear": {
        "value": "pear-shaped hips",
        "en": "pear-shaped",
        "zh": "梨形",
        "ja": "洋梨型"
    },
    "hipShapeRound": {
        "value": "round hip shape",
        "en": "round",
        "zh": "圆润",
        "ja": "丸みのある"
    },
    "hipShapeWide": {
        "value": "wide hips",
        "en": "wide",
        "zh": "宽臀",
        "ja": "広め"
    },
    "boots": {
        "value": "boots",
        "en": "boots",
        "zh": "靴子",
        "ja": "ブーツ"
    },
    "britishNationality": {
        "value": "British nationality",
        "en": "British nationality",
        "zh": "英国",
        "ja": "イギリス"
    },
    "brownHair": {
        "value": "brown hair",
        "en": "brown hair",
        "zh": "棕发",
        "ja": "茶髪"
    },
    "brownSkin": {
        "value": "brown skin",
        "en": "brown skin",
        "zh": "棕色皮肤",
        "ja": "褐色肌"
    },
    "buzzCut": {
        "value": "buzz cut",
        "en": "buzz cut",
        "zh": "寸头",
        "ja": "丸刈り"
    },
    "calm": {
        "value": "calm",
        "en": "calm",
        "zh": "冷静",
        "ja": "冷静"
    },
    "cargoPants": {
        "value": "cargo pants",
        "en": "cargo pants",
        "zh": "工装裤",
        "ja": "カーゴパンツ"
    },
    "cheerful": {
        "value": "cheerful",
        "en": "cheerful",
        "zh": "开朗",
        "ja": "明るい"
    },
    "chineseNationality": {
        "value": "Chinese nationality",
        "en": "Chinese nationality",
        "zh": "中国",
        "ja": "中国"
    },
    "choker": {
        "value": "choker",
        "en": "choker",
        "zh": "项圈",
        "ja": "チョーカー"
    },
    "confidentSmile": {
        "value": "confident smile",
        "en": "confident smile",
        "zh": "自信微笑",
        "ja": "自信のある笑み"
    },
    "curlyHair": {
        "value": "curly hair",
        "en": "curly hair",
        "zh": "卷发",
        "ja": "カールヘア"
    },
    "darkSkin": {
        "value": "dark skin",
        "en": "dark skin",
        "zh": "深色皮肤",
        "ja": "濃い肌色"
    },
    "detective": {
        "value": "detective",
        "en": "detective",
        "zh": "侦探",
        "ja": "探偵"
    },
    "doctor": {
        "value": "doctor",
        "en": "doctor",
        "zh": "医生",
        "ja": "医師"
    },
    "dress": {
        "value": "dress",
        "en": "dress",
        "zh": "连衣裙",
        "ja": "ワンピース"
    },
    "earrings": {
        "value": "earrings",
        "en": "earrings",
        "zh": "耳环",
        "ja": "イヤリング"
    },
    "eastAsianEthnicity": {
        "value": "East Asian ethnicity",
        "en": "East Asian ethnicity",
        "zh": "东亚",
        "ja": "東アジア"
    },
    "elegant": {
        "value": "elegant",
        "en": "elegant",
        "zh": "优雅",
        "ja": "優雅"
    },
    "fairSkin": {
        "value": "fair skin",
        "en": "fair skin",
        "zh": "白皙",
        "ja": "色白"
    },
    "female": {
        "value": "female",
        "en": "female",
        "zh": "女",
        "ja": "女性"
    },
    "fingerlessGloves": {
        "value": "fingerless gloves",
        "en": "fingerless gloves",
        "zh": "露指手套",
        "ja": "指なし手袋"
    },
    "frenchNationality": {
        "value": "French nationality",
        "en": "French nationality",
        "zh": "法国",
        "ja": "フランス"
    },
    "gentle": {
        "value": "gentle",
        "en": "gentle",
        "zh": "温柔",
        "ja": "優しい"
    },
    "gentleSmile": {
        "value": "gentle smile",
        "en": "gentle smile",
        "zh": "温柔微笑",
        "ja": "優しい笑顔"
    },
    "germanNationality": {
        "value": "German nationality",
        "en": "German nationality",
        "zh": "德国",
        "ja": "ドイツ"
    },
    "gloves": {
        "value": "gloves",
        "en": "gloves",
        "zh": "手套",
        "ja": "手袋"
    },
    "hanChineseEthnicity": {
        "value": "Han Chinese ethnicity",
        "en": "Han Chinese ethnicity",
        "zh": "汉族",
        "ja": "漢民族"
    },
    "hoodie": {
        "value": "hoodie",
        "en": "hoodie",
        "zh": "卫衣",
        "ja": "パーカー"
    },
    "idol": {
        "value": "idol",
        "en": "idol",
        "zh": "偶像",
        "ja": "アイドル"
    },
    "intimatePiercing": {
        "value": "intimate piercing",
        "en": "intimate piercing",
        "zh": "私密穿孔",
        "ja": "インティメイトピアス"
    },
    "introverted": {
        "value": "introverted",
        "en": "introverted",
        "zh": "内向",
        "ja": "内向的"
    },
    "jacket": {
        "value": "jacket",
        "en": "jacket",
        "zh": "夹克",
        "ja": "ジャケット"
    },
    "japaneseEthnicity": {
        "value": "Japanese ethnicity",
        "en": "Japanese ethnicity",
        "zh": "日本族裔",
        "ja": "日本系"
    },
    "japaneseNationality": {
        "value": "Japanese nationality",
        "en": "Japanese nationality",
        "zh": "日本",
        "ja": "日本"
    },
    "jeans": {
        "value": "jeans",
        "en": "jeans",
        "zh": "牛仔裤",
        "ja": "ジーンズ"
    },
    "jumpsuit": {
        "value": "jumpsuit",
        "en": "jumpsuit",
        "zh": "连体裤",
        "ja": "ジャンプスーツ"
    },
    "underwearBasic": {
        "value": "underwear",
        "en": "underwear",
        "zh": "内衣",
        "ja": "下着"
    },
    "camisole": {
        "value": "camisole",
        "en": "camisole",
        "zh": "吊带背心",
        "ja": "キャミソール"
    },
    "sportsBra": {
        "value": "sports bra",
        "en": "sports bra",
        "zh": "运动内衣",
        "ja": "スポーツブラ"
    },
    "briefs": {
        "value": "briefs",
        "en": "briefs",
        "zh": "三角内裤",
        "ja": "ブリーフ"
    },
    "boxerShorts": {
        "value": "boxer shorts",
        "en": "boxer shorts",
        "zh": "四角内裤",
        "ja": "ボクサーパンツ"
    },
    "clothingMaterialSilk": {
        "value": "silk clothing material",
        "en": "silk",
        "zh": "丝绸",
        "ja": "シルク"
    },
    "clothingMaterialLeather": {
        "value": "leather clothing material",
        "en": "leather",
        "zh": "皮革",
        "ja": "レザー"
    },
    "clothingMaterialLace": {
        "value": "lace clothing material",
        "en": "lace",
        "zh": "蕾丝",
        "ja": "レース"
    },
    "clothingMaterialLatex": {
        "value": "latex clothing material",
        "en": "latex",
        "zh": "latex",
        "ja": "ラテックス"
    },
    "clothingMaterialCotton": {
        "value": "cotton clothing material",
        "en": "cotton",
        "zh": "棉质",
        "ja": "コットン"
    },
    "patternSolid": {
        "value": "solid color pattern",
        "en": "solid color",
        "zh": "纯色",
        "ja": "無地"
    },
    "patternCheckered": {
        "value": "checkered pattern",
        "en": "checkered",
        "zh": "格子",
        "ja": "チェック柄"
    },
    "patternFloral": {
        "value": "floral pattern",
        "en": "floral pattern",
        "zh": "花纹",
        "ja": "花柄"
    },
    "patternGradient": {
        "value": "gradient pattern",
        "en": "gradient",
        "zh": "渐变",
        "ja": "グラデーション"
    },
    "detailSemiTransparent": {
        "value": "semi-transparent clothing",
        "en": "semi-transparent",
        "zh": "半透明",
        "ja": "半透明"
    },
    "detailHighlyTransparent": {
        "value": "highly transparent clothing",
        "en": "highly transparent",
        "zh": "高度透明",
        "ja": "高透明"
    },
    "detailDamaged": {
        "value": "damaged clothing",
        "en": "damaged",
        "zh": "破损",
        "ja": "ダメージ加工"
    },
    "detailTight": {
        "value": "tight-fitting clothing",
        "en": "tight-fitting",
        "zh": "紧身",
        "ja": "タイト"
    },
    "detailLoose": {
        "value": "loose-fitting clothing",
        "en": "loose-fitting",
        "zh": "宽松",
        "ja": "ルーズ"
    },
    "detailLayered": {
        "value": "layered clothing",
        "en": "layered",
        "zh": "层叠",
        "ja": "レイヤード"
    },
    "kneeSocks": {
        "value": "knee socks",
        "en": "knee socks",
        "zh": "及膝袜",
        "ja": "ニーソックス"
    },
    "koreanEthnicity": {
        "value": "Korean ethnicity",
        "en": "Korean ethnicity",
        "zh": "韩族",
        "ja": "韓国系"
    },
    "koreanNationality": {
        "value": "Korean nationality",
        "en": "Korean nationality",
        "zh": "韩国",
        "ja": "韓国"
    },
    "ladyboy": {
        "value": "ladyboy",
        "en": "ladyboy",
        "zh": "Ladyboy",
        "ja": "Ladyboy"
    },
    "latinaEthnicity": {
        "value": "Latina ethnicity",
        "en": "Latina ethnicity",
        "zh": "拉丁裔",
        "ja": "ラテン系"
    },
    "lightSkin": {
        "value": "light skin",
        "en": "light skin",
        "zh": "浅肤色",
        "ja": "明るい肌"
    },
    "loafers": {
        "value": "loafers",
        "en": "loafers",
        "zh": "乐福鞋",
        "ja": "ローファー"
    },
    "longHair": {
        "value": "long hair",
        "en": "long hair",
        "zh": "长发",
        "ja": "ロングヘア"
    },
    "male": {
        "value": "male",
        "en": "male",
        "zh": "男",
        "ja": "男性"
    },
    "mediumHair": {
        "value": "medium-length hair",
        "en": "medium-length hair",
        "zh": "中长发",
        "ja": "ミディアムヘア"
    },
    "mediumSkin": {
        "value": "medium skin",
        "en": "medium skin",
        "zh": "中等肤色",
        "ja": "中間的な肌色"
    },
    "melancholicExpression": {
        "value": "melancholic expression",
        "en": "melancholic expression",
        "zh": "忧郁",
        "ja": "憂鬱な表情"
    },
    "messyHair": {
        "value": "messy hair",
        "en": "messy hair",
        "zh": "凌乱发",
        "ja": "乱れ髪"
    },
    "middleEasternEthnicity": {
        "value": "Middle Eastern ethnicity",
        "en": "Middle Eastern ethnicity",
        "zh": "中东",
        "ja": "中東系"
    },
    "mysterious": {
        "value": "mysterious",
        "en": "mysterious",
        "zh": "神秘",
        "ja": "神秘的"
    },
    "mysteriousSmile": {
        "value": "mysterious smile",
        "en": "mysterious smile",
        "zh": "神秘微笑",
        "ja": "謎めいた笑み"
    },
    "navelPiercing": {
        "value": "navel piercing",
        "en": "navel piercing",
        "zh": "肚脐环",
        "ja": "へそピアス"
    },
    "necklace": {
        "value": "necklace",
        "en": "necklace",
        "zh": "项链",
        "ja": "ネックレス"
    },
    "neutralExpression": {
        "value": "neutral expression",
        "en": "neutral expression",
        "zh": "平静",
        "ja": "無表情"
    },
    "nipplePiercing": {
        "value": "nipple piercing",
        "en": "nipple piercing",
        "zh": "乳环",
        "ja": "乳首ピアス"
    },
    "noseRing": {
        "value": "nose ring",
        "en": "nose ring",
        "zh": "鼻环",
        "ja": "鼻ピアス"
    },
    "nurse": {
        "value": "nurse",
        "en": "nurse",
        "zh": "护士",
        "ja": "看護師"
    },
    "officeLady": {
        "value": "office lady",
        "en": "office lady",
        "zh": "OL",
        "ja": "OL"
    },
    "oliveSkin": {
        "value": "olive skin",
        "en": "olive skin",
        "zh": "橄榄肤色",
        "ja": "オリーブ肌"
    },
    "onePieceSwimsuit": {
        "value": "one-piece swimsuit",
        "en": "one-piece swimsuit",
        "zh": "连体泳衣",
        "ja": "ワンピース水着"
    },
    "pantyhose": {
        "value": "pantyhose",
        "en": "pantyhose",
        "zh": "连裤袜",
        "ja": "パンスト"
    },
    "pinkHair": {
        "value": "pink hair",
        "en": "pink hair",
        "zh": "粉发",
        "ja": "ピンク髪"
    },
    "pleatedSkirt": {
        "value": "pleated skirt",
        "en": "pleated skirt",
        "zh": "百褶裙",
        "ja": "プリーツスカート"
    },
    "ponytail": {
        "value": "ponytail",
        "en": "ponytail",
        "zh": "马尾",
        "ja": "ポニーテール"
    },
    "porcelainSkin": {
        "value": "porcelain skin",
        "en": "porcelain skin",
        "zh": "瓷白",
        "ja": "陶器のような白肌"
    },
    "princess": {
        "value": "princess",
        "en": "princess",
        "zh": "公主",
        "ja": "姫"
    },
    "queen": {
        "value": "queen",
        "en": "queen",
        "zh": "女王",
        "ja": "女王"
    },
    "rebellious": {
        "value": "rebellious",
        "en": "rebellious",
        "zh": "叛逆",
        "ja": "反抗的"
    },
    "redHair": {
        "value": "red hair",
        "en": "red hair",
        "zh": "红发",
        "ja": "赤髪"
    },
    "russianNationality": {
        "value": "Russian nationality",
        "en": "Russian nationality",
        "zh": "俄罗斯",
        "ja": "ロシア"
    },
    "scarf": {
        "value": "scarf",
        "en": "scarf",
        "zh": "围巾",
        "ja": "マフラー"
    },
    "seriousExpression": {
        "value": "serious expression",
        "en": "serious expression",
        "zh": "严肃",
        "ja": "真剣な表情"
    },
    "shirt": {
        "value": "shirt",
        "en": "shirt",
        "zh": "衬衫",
        "ja": "シャツ"
    },
    "shortHair": {
        "value": "short hair",
        "en": "short hair",
        "zh": "短发",
        "ja": "ショートヘア"
    },
    "shorts": {
        "value": "shorts",
        "en": "shorts",
        "zh": "短裤",
        "ja": "ショートパンツ"
    },
    "shyExpression": {
        "value": "shy expression",
        "en": "shy expression",
        "zh": "害羞",
        "ja": "恥ずかしそうな表情"
    },
    "silkScarf": {
        "value": "silk scarf",
        "en": "silk scarf",
        "zh": "丝巾",
        "ja": "シルクスカーフ"
    },
    "silverHair": {
        "value": "silver hair",
        "en": "silver hair",
        "zh": "银发",
        "ja": "銀髪"
    },
    "skirt": {
        "value": "skirt",
        "en": "skirt",
        "zh": "裙子",
        "ja": "スカート"
    },
    "smoothHair": {
        "value": "smooth hair",
        "en": "smooth hair",
        "zh": "顺滑发",
        "ja": "なめらかな髪"
    },
    "sneakers": {
        "value": "sneakers",
        "en": "sneakers",
        "zh": "运动鞋",
        "ja": "スニーカー"
    },
    "soldier": {
        "value": "soldier",
        "en": "soldier",
        "zh": "军人",
        "ja": "軍人"
    },
    "southAsianEthnicity": {
        "value": "South Asian ethnicity",
        "en": "South Asian ethnicity",
        "zh": "南亚",
        "ja": "南アジア系"
    },
    "southeastAsianEthnicity": {
        "value": "Southeast Asian ethnicity",
        "en": "Southeast Asian ethnicity",
        "zh": "东南亚",
        "ja": "東南アジア系"
    },
    "stockings": {
        "value": "stockings",
        "en": "stockings",
        "zh": "长筒袜",
        "ja": "ストッキング"
    },
    "straightHair": {
        "value": "straight hair",
        "en": "straight hair",
        "zh": "直发",
        "ja": "ストレートヘア"
    },
    "student": {
        "value": "student",
        "en": "student",
        "zh": "学生",
        "ja": "学生"
    },
    "sweater": {
        "value": "sweater",
        "en": "sweater",
        "zh": "毛衣",
        "ja": "セーター"
    },
    "tShirt": {
        "value": "t-shirt",
        "en": "t-shirt",
        "zh": "T恤",
        "ja": "Tシャツ"
    },
    "tanSkin": {
        "value": "tan skin",
        "en": "tan skin",
        "zh": "小麦/古铜",
        "ja": "日焼け肌"
    },
    "tankTop": {
        "value": "tank top",
        "en": "tank top",
        "zh": "背心",
        "ja": "タンクトップ"
    },
    "teacher": {
        "value": "teacher",
        "en": "teacher",
        "zh": "教师",
        "ja": "教師"
    },
    "thighHighs": {
        "value": "thigh highs",
        "en": "thigh highs",
        "zh": "过膝袜",
        "ja": "サイハイソックス"
    },
    "tonguePiercing": {
        "value": "tongue piercing",
        "en": "tongue piercing",
        "zh": "舌环",
        "ja": "舌ピアス"
    },
    "twinTails": {
        "value": "twin tails",
        "en": "twin tails",
        "zh": "双马尾",
        "ja": "ツインテール"
    },
    "veryLongHair": {
        "value": "very long hair",
        "en": "very long hair",
        "zh": "超长发",
        "ja": "超ロングヘア"
    },
    "wavyHair": {
        "value": "wavy hair",
        "en": "wavy hair",
        "zh": "波浪发",
        "ja": "ウェーブヘア"
    },
    "whiteEuropeanEthnicity": {
        "value": "White European ethnicity",
        "en": "White European ethnicity",
        "zh": "白人/欧洲",
        "ja": "白人/ヨーロッパ系"
    },
    "whiteHair": {
        "value": "white hair",
        "en": "white hair",
        "zh": "白发",
        "ja": "白髪"
    },
    "wideBrimHat": {
        "value": "wide-brim hat",
        "en": "wide-brim hat",
        "zh": "宽檐帽",
        "ja": "つば広帽"
    },
    "witch": {
        "value": "witch",
        "en": "witch",
        "zh": "女巫",
        "ja": "魔女"
    }
,

    "veryShortHair": { "value": "very short hair", "en": "very short hair", "zh": "极短发", "ja": "ベリーショート" },
    "shoulderLengthHair": { "value": "shoulder-length hair", "en": "shoulder-length hair", "zh": "及肩发", "ja": "肩までの髪" },
    "silkyHair": { "value": "silky hair", "en": "silky hair", "zh": "丝滑发质", "ja": "絹のような髪質" },
    "thickHair": { "value": "thick hair", "en": "thick hair", "zh": "浓密发质", "ja": "濃い髪質" },
    "fineHair": { "value": "fine hair", "en": "fine hair", "zh": "细软发质", "ja": "細く柔らかい髪質" },
    "coarseHair": { "value": "coarse hair", "en": "coarse hair", "zh": "粗硬发质", "ja": "硬めの髪質" },
    "braidedHair": { "value": "braided hair", "en": "braided hair", "zh": "编发", "ja": "編み髪" },
    "bunHairstyle": { "value": "bun hairstyle", "en": "bun hairstyle", "zh": "发髻", "ja": "お団子ヘア" },
    "himeCut": { "value": "hime cut", "en": "hime cut", "zh": "姬发式", "ja": "姫カット" },
    "pixieCut": { "value": "pixie cut", "en": "pixie cut", "zh": "精灵短发", "ja": "ピクシーカット" },
    "neatlyStyledHair": { "value": "neatly styled hair", "en": "neatly styled hair", "zh": "整齐", "ja": "きれいに整えた髪" },
    "fluffyHair": { "value": "fluffy hair", "en": "fluffy hair", "zh": "蓬松", "ja": "ふんわりした髪" },
    "wetHair": { "value": "wet hair", "en": "wet hair", "zh": "湿发", "ja": "濡れ髪" },
    "windSweptHair": { "value": "wind-swept hair", "en": "wind-swept hair", "zh": "被风吹乱", "ja": "風になびいた髪" },
    "slightlyTousledHair": { "value": "slightly tousled hair", "en": "slightly tousled hair", "zh": "微微凌乱", "ja": "少し乱れた髪" },
    "noBangs": { "value": "no bangs", "en": "no bangs", "zh": "无刘海", "ja": "前髪なし" },
    "straightBangs": { "value": "straight bangs", "en": "straight bangs", "zh": "齐刘海", "ja": "ぱっつん前髪" },
    "sideSweptBangs": { "value": "side-swept bangs", "en": "side-swept bangs", "zh": "斜刘海", "ja": "流し前髪" },
    "curtainBangs": { "value": "curtain bangs", "en": "curtain bangs", "zh": "八字刘海", "ja": "カーテンバング" },
    "wispyBangs": { "value": "wispy bangs", "en": "wispy bangs", "zh": "空气刘海", "ja": "シースルーバング" },
    "shortBangs": { "value": "short bangs", "en": "short bangs", "zh": "短刘海", "ja": "短い前髪" },
    "looseHairStrands": { "value": "loose hair strands", "en": "loose hair strands", "zh": "零散发丝", "ja": "ほつれ毛" },
    "faceFramingHairStrands": { "value": "face-framing hair strands", "en": "face-framing hair strands", "zh": "脸侧发丝", "ja": "顔周りの髪束" },
    "flyawayHairStrands": { "value": "flyaway hair strands", "en": "flyaway hair strands", "zh": "翘起碎发", "ja": "跳ねた後れ毛" },
    "thinHairStrands": { "value": "thin hair strands", "en": "thin hair strands", "zh": "细发丝", "ja": "細い髪束" },
    "layeredHairStrands": { "value": "layered hair strands", "en": "layered hair strands", "zh": "层次发丝", "ja": "レイヤーのある髪束" },
    "glossyHairStrands": { "value": "glossy hair strands", "en": "glossy hair strands", "zh": "高光发丝", "ja": "艶のある髪束" } ,
    "phoenixEyes": { "value": "phoenix eyes", "en": "phoenix eyes", "zh": "丹凤眼", "ja": "切れ長の目" },
    "almondEyes": { "value": "almond eyes", "en": "almond eyes", "zh": "杏眼", "ja": "アーモンドアイ" },
    "roundEyes": { "value": "round eyes", "en": "round eyes", "zh": "圆眼", "ja": "丸い目" },
    "upturnedEyes": { "value": "upturned eyes", "en": "upturned eyes", "zh": "上挑眼", "ja": "つり目" },
    "downturnedEyes": { "value": "downturned eyes", "en": "downturned eyes", "zh": "下垂眼", "ja": "たれ目" },
    "blackEyes": { "value": "black eyes", "en": "black eyes", "zh": "黑", "ja": "黒い目" },
    "brownEyes": { "value": "brown eyes", "en": "brown eyes", "zh": "棕", "ja": "茶色の目" },
    "blueEyes": { "value": "blue eyes", "en": "blue eyes", "zh": "蓝", "ja": "青い目" },
    "greenEyes": { "value": "green eyes", "en": "green eyes", "zh": "绿", "ja": "緑の目" },
    "grayEyes": { "value": "gray eyes", "en": "gray eyes", "zh": "灰", "ja": "灰色の目" },
    "heterochromiaEyes": { "value": "heterochromia eyes", "en": "heterochromia eyes", "zh": "异色瞳", "ja": "オッドアイ" },
    "sharpGaze": { "value": "sharp gaze", "en": "sharp gaze", "zh": "锐利", "ja": "鋭い眼差し" },
    "gentleGaze": { "value": "gentle gaze", "en": "gentle gaze", "zh": "温柔", "ja": "優しい眼差し" },
    "coldElegantGaze": { "value": "cold elegant gaze", "en": "cold elegant gaze", "zh": "冷艳", "ja": "冷ややかで艶のある眼差し" },
    "distantGaze": { "value": "distant gaze", "en": "distant gaze", "zh": "疏离", "ja": "遠い眼差し" },
    "innocentGaze": { "value": "innocent gaze", "en": "innocent gaze", "zh": "清澈", "ja": "澄んだ眼差し" },
    "straightNose": { "value": "straight nose", "en": "straight nose", "zh": "直鼻", "ja": "まっすぐな鼻" },
    "smallNose": { "value": "small nose", "en": "small nose", "zh": "小巧鼻", "ja": "小さな鼻" },
    "highNoseBridge": { "value": "high nose bridge", "en": "high nose bridge", "zh": "高鼻梁", "ja": "高い鼻筋" },
    "buttonNose": { "value": "button nose", "en": "button nose", "zh": "圆鼻头", "ja": "丸い鼻先" },
    "sharpNose": { "value": "sharp nose", "en": "sharp nose", "zh": "尖鼻", "ja": "シャープな鼻" },
    "thinLips": { "value": "thin lips", "en": "thin lips", "zh": "薄唇", "ja": "薄い唇" },
    "fullLips": { "value": "full lips", "en": "full lips", "zh": "厚唇", "ja": "厚い唇" },
    "smallLips": { "value": "small lips", "en": "small lips", "zh": "小巧唇", "ja": "小さな唇" },
    "heartShapedLips": { "value": "heart-shaped lips", "en": "heart-shaped lips", "zh": "心形唇", "ja": "ハート形の唇" },
    "softLips": { "value": "soft lips", "en": "soft lips", "zh": "柔和唇形", "ja": "柔らかな唇" },
    "ovalFace": { "value": "oval face", "en": "oval face", "zh": "瓜子脸", "ja": "卵型の顔" },
    "heartShapedFace": { "value": "heart-shaped face", "en": "heart-shaped face", "zh": "心形脸", "ja": "ハート型の顔" },
    "roundFace": { "value": "round face", "en": "round face", "zh": "圆脸", "ja": "丸顔" },
    "vShapedFace": { "value": "V-shaped face", "en": "V-shaped face", "zh": "V脸", "ja": "Vラインの顔" },
    "squareFace": { "value": "square face", "en": "square face", "zh": "方脸", "ja": "四角い顔" },
    "smoothSkin": { "value": "smooth skin", "en": "smooth skin", "zh": "光滑", "ja": "なめらかな肌" },
    "visiblePores": { "value": "visible pores", "en": "visible pores", "zh": "毛孔", "ja": "毛穴が見える肌" },
    "delicateSkinTexture": { "value": "delicate skin texture", "en": "delicate skin texture", "zh": "细腻", "ja": "きめ細かな肌" },
    "roughSkinTexture": { "value": "slightly rough skin texture", "en": "slightly rough skin texture", "zh": "微粗糙", "ja": "やや粗い肌質" },
    "beautyMark": { "value": "beauty mark", "en": "beauty mark", "zh": "痣", "ja": "ほくろ" },
    "freckles": { "value": "freckles", "en": "freckles", "zh": "雀斑", "ja": "そばかす" },
    "birthmark": { "value": "birthmark", "en": "birthmark", "zh": "胎记", "ja": "あざ" },
    "molesAndFreckles": { "value": "moles and freckles", "en": "moles and freckles", "zh": "痣和雀斑", "ja": "ほくろとそばかす" },
    "noVisibleScars": { "value": "no visible scars", "en": "no visible scars", "zh": "无明显疤痕", "ja": "目立つ傷跡なし" },
    "smallScar": { "value": "small scar", "en": "small scar", "zh": "小疤痕", "ja": "小さな傷跡" },
    "visibleScar": { "value": "visible scar", "en": "visible scar", "zh": "明显疤痕", "ja": "目立つ傷跡" },
    "facialScar": { "value": "facial scar", "en": "facial scar", "zh": "脸部疤痕", "ja": "顔の傷跡" }
};
function getCurrentLanguage(){
    return document.getElementById("language")?.value || "en";
}

function t(key){
    const lang = getCurrentLanguage();
    const optionLabel = OPTION_LABELS[key];

    return translations[lang]?.[key]
        || translations.en[key]
        || optionLabel?.[lang]
        || optionLabel?.en
        || key;
}

function labelText(key){
    const lang = getCurrentLanguage();
    return OPTION_LABELS[key]?.[lang] || OPTION_LABELS[key]?.en || t(key);
}

function applyOptionLabels(){
    document.querySelectorAll("option[data-i18n]").forEach(option => {
        const key = option.dataset.i18n;
        const definition = OPTION_LABELS[key];
        if(definition){
            option.value = definition.value;
            option.textContent = labelText(key);
        }else{
            option.textContent = t(key);
        }
    });

    document.querySelectorAll("label input[type='checkbox'] + span[data-i18n]").forEach(span => {
        const key = span.dataset.i18n;
        const definition = OPTION_LABELS[key];
        const input = span.previousElementSibling;
        if(definition && input){
            input.value = definition.value;
            span.textContent = labelText(key);
        }else{
            span.textContent = t(key);
        }
    });
}

function setRangeValue(id, value){
    const input = document.getElementById(id);
    if(!input) return;
    input.value = value;
    updateRangeValue(id);
}

const BODY_TYPE_PRESETS = {
    "Slender": { weight: 50, bust: 82, waist: 58, hips: 84 },
    "Slim": { weight: 52, bust: 84, waist: 60, hips: 86 },
    "Curvy": { weight: 64, bust: 95, waist: 68, hips: 98 },
    "Athletic": { weight: 58, bust: 88, waist: 64, hips: 90 },
    "Hourglass": { weight: 57, bust: 92, waist: 60, hips: 94 },
    "Petite": { weight: 45, bust: 80, waist: 56, hips: 82 },
    "Tall and lean": { weight: 56, bust: 84, waist: 60, hips: 88 },
    "Model-like": { weight: 55, bust: 86, waist: 59, hips: 88 }
};

function applyBodyTypePreset(){
    const bodyType = getValue("bodyType");
    const preset = BODY_TYPE_PRESETS[bodyType];
    if(!preset) return;

    setRangeValue("weight", preset.weight);
    setRangeValue("bust", preset.bust);
    setRangeValue("waist", preset.waist);
    setRangeValue("hips", preset.hips);
}

function getValue(id){
    return document.getElementById(id).value.trim();
}

function getCheckedValues(className){
    return [...document.querySelectorAll("." + className + ":checked")]
        .map(item => item.value);
}

function limitSelection(changedItem, className, maxCount){
    const selected = document.querySelectorAll("." + className + ":checked");

    if(selected.length > maxCount){
        changedItem.checked = false;
    }
}

function getCommaListFromInput(id){
    return getValue(id)
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");
}

function getOriginPrompt(){
    const nationalities = [
        ...getCheckedValues("nationality"),
        ...getCommaListFromInput("customNationality")
    ];

    const ethnicities = [
        ...getCheckedValues("ethnicity"),
        ...getCommaListFromInput("customEthnicity")
    ];

    const parts = [];

    if(nationalities.length > 0){
        parts.push(nationalities.join(" and "));
    }

    if(ethnicities.length === 1){
        parts.push(ethnicities[0]);
    }else if(ethnicities.length > 1){
        parts.push("mixed ethnicity, " + ethnicities.join(" and "));
    }

    return parts.join(", ");
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
    const customPersonality = getCommaListFromInput("customPersonality");
    const customOccupation = getCommaListFromInput("customOccupation");

    return {
        name: getValue("name"),
        age: getValue("age"),
        gender: getValue("gender"),
        nationality: [
            ...getCheckedValues("nationality"),
            ...getCommaListFromInput("customNationality")
        ],
        ethnicity: [
            ...getCheckedValues("ethnicity"),
            ...getCommaListFromInput("customEthnicity")
        ],
        skinTone: getValue("skinTone"),
        occupation: [
            getValue("occupation"),
            ...customOccupation
        ].filter(item => item !== ""),

        body: {
            heightCm: getValue("height"),
            weightKg: getValue("weight"),
            bodyType: getValue("bodyType"),
            breastShape: getValue("breastShape"),
            hipShape: getValue("hipShape"),
            bustCm: getValue("bust"),
            waistCm: getValue("waist"),
            hipsCm: getValue("hips")
        },

        hair: {
            length: getValue("hairLength"),
            color: getValue("hairColor"),
            texture: getValue("hairTexture"),
            condition: getValue("hairCondition"),
            bangs: getValue("bangsShape"),
            strands: getValue("hairStrands")
        },

        appearance: {
            face: getValue("face"),
            expression: getValue("expression"),
            eyeShape: getValue("eyeShape"),
            eyeColor: getValue("eyeColor"),
            eyeGaze: getValue("eyeGaze"),
            hat: getValue("hat"),
            noseShape: getValue("noseShape"),
            lipsShape: getValue("lipsShape"),
            faceShape: getValue("faceShape"),
            neck: getValue("neck"),
            skinTexture: getValue("skinTexture"),
            skinMarks: getValue("skinMarks"),
            skinScar: getValue("skinScar"),
            piercings: getCheckedValues("piercing")
        },

        clothing: {
            onesuit: getValue("onesuit"),
            top: getValue("top"),
            bottom: getValue("bottom"),
            underwear: getValue("underwear"),
            material: getValue("clothingMaterial"),
            pattern: getValue("clothingPattern"),
            details: getCheckedValues("clothingDetail"),
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
        getOriginPrompt(),
        data.skinTone,
        ...data.occupation,

        data.body.heightCm ? data.body.heightCm + " cm tall" : "",
        data.body.weightKg ? data.body.weightKg + " kg" : "",
        data.body.bodyType,
        data.body.breastShape,
        data.body.hipShape,
        data.body.bustCm && data.body.waistCm && data.body.hipsCm
            ? data.body.bustCm + "-" + data.body.waistCm + "-" + data.body.hipsCm + " body measurements"
            : "",

        data.hair.length,
        data.hair.color,
        data.hair.texture,
        data.hair.condition,
        data.hair.bangs,
        data.hair.strands,

        data.appearance.face,
        data.appearance.expression,
        data.appearance.eyeShape,
        data.appearance.eyeColor,
        data.appearance.eyeGaze,
        data.appearance.hat,
        data.appearance.noseShape,
        data.appearance.lipsShape,
        data.appearance.faceShape,
        data.appearance.neck,
        data.appearance.skinTexture,
        data.appearance.skinMarks,
        data.appearance.skinScar,
        ...data.appearance.piercings,

        data.clothing.onesuit,
        data.clothing.top,
        data.clothing.bottom,
        data.clothing.underwear,
        data.clothing.material,
        data.clothing.pattern,
        ...data.clothing.details,
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
        alert(t("alertGenerateFirst"));
        return;
    }

    navigator.clipboard.writeText(text);
    alert(t("alertCopied"));
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
    const lang = getCurrentLanguage();
    const langMap = {
        zh: "zh-CN",
        en: "en",
        ja: "ja"
    };

    document.documentElement.lang = langMap[lang] || "en";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        if(element.tagName === "OPTION") return;
        if(element.previousElementSibling?.tagName === "INPUT" && element.previousElementSibling.type === "checkbox") return;
        const key = element.dataset.i18n;
        element.textContent = t(key);
    });

    applyOptionLabels();
}

toggleClothes();
changeLanguage();
