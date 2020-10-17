﻿let dataDic = {
  "area": {
    "name": "面积",
    "type": "n"
  },
  "perimeter": {
    "name": "周长",
    "type": "n"
  },
  "deng": {
    "name": "等级",
    "type": "t"
  },
  "dengji": {
    "name": "等级1",
    "type": "t"
  },
  "yalei": {
    "name": "亚类",
    "type": "t"
  },
  "sanhua": {
    "name": "三化",
    "type": "t"
  },
  "xing": {
    "name": "植物类型",
    "type": "t"
  },
  "lei": {
    "name": "土地类型",
    "type": "t"
  },
  "ssjg": {
    "name": "ssjg",
    "type": ""
  },
  "date": {
    "name": "年份",
    "type": "n"
  },
  "mctypes": {
    "name": "牧草类型",
    "type": "t"
  },
  "mczhonglei": {
    "name": "牧草种类",
    "type": "t"
  },
  "zzarea": {
    "name": "种植面积",
    "type": "n"
  },
  "jxpoint": {
    "name": "jx点",
    "type": ""
  },
  "country": {
    "name": "区名",
    "type": "t"
  },
  "towns": {
    "name": "镇名",
    "type": "t"
  },
  "improvearea": {
    "name": "改良面积",
    "type": "n"
  },
  "improvetypes": {
    "name": "改良类型",
    "type": "t"
  },
  "region": {
    "name": "区域名称",
    "type": "t"
  },
  "specie": {
    "name": "物种",
    "type": "t"
  },
  "danger": {
    "name": "危害面积",
    "type": "n"
  },
  "control": {
    "name": "防治面积",
    "type": "n"
  },
  "sealevel": {
    "name": "海拔高度",
    "type": "n"
  },
  "adduser": {
    "name": "调查人",
    "type": "t"
  },
  "samplearea": {
    "name": "样方面积",
    "type": "n"
  },
  "plantcover": {
    "name": "盖度",
    "type": "n"
  },
  "avgheight": {
    "name": "平均高度",
    "type": "n"
  },
  "mainweeds": {
    "name": "主植物",
    "type": "t"
  },
  "pestweeds": {
    "name": "害草",
    "type": "t"
  },
  "allfreshweigh": {
    "name": "鲜重",
    "type": "n"
  },
  "alldryweigh": {
    "name": "干重",
    "type": "n"
  },
  "type": {
    "name": "类型",
    "type": "t"
  },
  "occurarea": {
    "name": "毒害面积",
    "type": "n"
  },
  "landform": {
    "name": "地形",
    "type": "t"
  },
  "soil": {
    "name": "土壤类型",
    "type": "t"
  },
  "grass": {
    "name": "植被类型",
    "type": "t"
  },
  "coverrate": {
    "name": "植被覆盖率",
    "type": "n"
  },
  "measure": {
    "name": "测量类型",
    "type": "t"
  },
  "pestrate": {
    "name": "毒害次数",
    "type": "n"
  },
  "mousetype": {
    "name": "老鼠种类",
    "type": "t"
  },
  "enemy": {
    "name": "天敌",
    "type": "t"
  },
  "plantheight": {
    "name": "植物高度",
    "type": "n"
  },
  "weedname": {
    "name": "植物名称",
    "type": "t"
  },
  "coverdegree": {
    "name": "覆盖率",
    "type": "n"
  },
  "thickness": {
    "name": "thickness",
    "type": ""
  },
  "species": {
    "name": "事件类型",
    "type": "t"
  },
  "longitude": {
    "name": "经度",
    "type": "n"
  },
  "latitude": {
    "name": "纬度",
    "type": "n"
  },
  "name": {
    "name": "名称",
    "type": "t"
  },
  "telephone": {
    "name": "联系电话",
    "type": "t"
  },
  "address": {
    "name": "地址",
    "type": "t"
  },
  "addtime": {
    "name": "处理时间",
    "type": "t"
  }
};

function getFieldByName(name) {
  for (let field in dataDic) {
    if (dataDic[field].name === name) {
      return field;
    }
  }
}
let tableModules = {
  "grass": {
    "name": "草原",
    "fields": ["gid", "area", "perimeter", "deng", "dengji", "yalei", "sanhua", "xing", "lei", "sanhuayi", "year"]
  },
  "naturegrassbetter": {
    "name": "天然草改良",
    "fields": ["ssjg", "date", "improvearea", "mainqunzhong", "improvetypes", "jxpoint", "picture", "file", "remark", "gid", "county", "towns"]
  },
  "pereport": {
    "name": "草原执法",
    "fields": ["id", "region", "species", "longitude", "latitude", "name", "adduser", "telephone", "address", "note", "file", "type", "addtime", "opinions", "county", "towns"]
  },
  "pestdisease": {
    "name": "人工草地病虫害",
    "fields": ["gid", "region", "species", "longitude", "latitude", "pesttype", "hostplant", "danger", "serious", "control", "economiclose", "note", "file", "addtime", "jxpoint", "ispoint", "video", "county", "towns"]
  },
  "pestmouse": {
    "name": "鼠害",
    "fields": ["surveytime", "region", "occurarea", "adduser", "longitude", "latitude", "landform", "soil", "grass", "coverrate", "measure", "isprevent", "drug", "method", "pestrate", "mousetype", "densitynum", "enemy", "samplearea", "file", "addtime", "elevation", "anpp", "measureanpp", "driedup", "sandcover", "surfaceerosion", "sandycover", "saltmarshes", "surfacehardening", "surfacechasm", "grasssecond", "grassthird", "sampleid", "id", "mainweeds", "slopeposition", "slopetoward", "note", "video", "county", "towns"]
  },
  "pestinsect": {
    "name": "虫害",
    "fields": ["id", "surveytime", "region", "occurarea", "adduser", "longitude", "latitude", "landform", "soil", "grass", "mainweeds", "coverrate", "measure", "isprevent", "drug", "method", "insectold", "insecttype", "enemy", "file", "addtime", "note", "samplearea", "elevation", "anpp", "measureanpp", "driedup", "sandcover", "sandycover", "surfaceerosion", "saltmarshes", "surfacehardening", "surfacechasm", "grasssecond", "grassthird", "imgno", "pestdense", "sampleid", "slopetoward", "slopeposition", "video", "county", "towns"]
  },
  "prosperitysample": {
    "name": "产草量",
    "fields": ["id", "surveytime", "longitude", "latitude", "sealevel", "adduser", "sampleid", "samplearea", "litter", "plantcover", "avgheight", "plantnum", "pestnum", "mainweeds", "pestweeds", "pestweight", "freshweigh", "dryweigh", "ediblefreshweigh", "edibledryweigh", "allfreshweigh", "alldryweigh", "allediblefreshweigh", "alledibledryweigh", "note", "picture", "pid", "orderno", "type", "opinions", "ssurveytime", "sadduser", "slongitude", "slatitude", "ssampleid", "ssealevel", "sbplanttypes", "savgplantheight", "sbmainplants", "savgfreshweigh", "savgediblefreshweigh", "savgdryweigh", "savgedibledryweigh", "ssplanttypes", "sallcoverarea", "ssmainplants", "savgshrubheight", "ssavgfreshweigh", "ssavgdryweigh", "slitter", "splantcover", "ssallfreshweigh", "ssalldryweigh", "snote", "spicture", "stype", "sopinions", "avghfreshweigh", "avghediblefreshweigh", "avghdryweigh", "avghedibledryweigh", "avgsavgheight", "avgsfreshweigh", "avgsediblefreshweigh", "avgsdryweigh", "avgsedibledryweigh", "avgsbtuftsize", "avgsbfreshweigh", "avgsbdryweigh", "avgsbplantbundlenumber", "avgsmtuftsize", "avgsmfreshweigh", "avgsmdryweigh", "avgsmplantbundlenumber", "avgsstuftsize", "avgssfreshweigh", "avgssdryweigh", "avgssplantbundlenumber", "avgscoverarea", "avgsgrassyieldfreshweigh", "avgsgrassyielddryweigh", "avgsbrushheight"]
  },
  "pestweeds": {
    "name": "毒草害",
    "fields": ["id", "surveytime", "region", "occurarea", "adduser", "longitude", "latitude", "landform", "soil", "grass", "mainweeds", "coverrate", "plantheight", "weedname", "coverdegree", "thickness", "isprevent", "drug", "method", "note", "file", "addtime", "grasssecond", "grassthird", "sampleid", "samplearea", "elevation", "imgno", "slopetoward", "slopeposition", "allfreshweigh", "allfreshratio", "alldryweigh", "alldryratio", "pestfreshweigh", "pestfreshratio", "pestdryweigh", "pestdryratio", "mainfreshweigh", "mainfreshratio", "maindryweigh", "maindryratio", "otherfreshweigh", "otherfreshratio", "otherdryweigh", "otherdryratio", "video", "county", "towns"]
  },
  "rgcdjs": {
    "name": "人工草地建设",
    "fields": ["ssjg", "date", "mctypes", "mczhonglei", "zzarea", "nowbbmc", "nowbbmcarea", "nowfbmc", "nowfbmcarea", "jxpoint", "picture", "file", "remark", "types", "gid", "avgyield", "allyield", "irrigation", "greenreserve", "ispoint", "county", "towns"]
  }
}

let preData = [
  {
    "chartName": "草原等级-面积统计图",
    "tableName": "grass",
    "fields": [
      {
        "name": "面积",
        "type": "n",
        "fieldname": "area"
      },
      {
        "name": "等级",
        "type": "t",
        "fieldname": "deng"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "草原三化-面积统计图",
    "tableName": "grass",
    "fields": [
      {
        "name": "面积",
        "type": "n",
        "fieldname": "area"
      },
      {
        "name": "三化",
        "type": "t",
        "fieldname": "sanhua"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "草原植物类型-面积统计图",
    "tableName": "grass",
    "fields": [
      {
        "name": "面积",
        "type": "n",
        "fieldname": "area"
      },
      {
        "name": "植物类型",
        "type": "t",
        "fieldname": "xing"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "草原土地类型-面积统计图",
    "tableName": "grass",
    "fields": [
      {
        "name": "面积",
        "type": "n",
        "fieldname": "area"
      },
      {
        "name": "土地类型",
        "type": "t",
        "fieldname": "lei"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "草原亚类-面积统计图",
    "tableName": "grass",
    "fields": [
      {
        "name": "面积",
        "type": "n",
        "fieldname": "area"
      },
      {
        "name": "亚类",
        "type": "t",
        "fieldname": "yalei"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "天然草年改良面积统计",
    "tableName": "naturegrassbetter",
    "fields": [
      {
        "name": "年份",
        "type": "n",
        "fieldname": "date"
      },
      {
        "name": "改良面积",
        "type": "n",
        "fieldname": "improvearea"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "天然草改良镇名-改良面积统计图",
    "tableName": "naturegrassbetter",
    "fields": [
      {
        "name": "改良面积",
        "type": "n",
        "fieldname": "improvearea"
      },
      {
        "name": "镇名",
        "type": "t",
        "fieldname": "towns"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "人工草地病虫害区域名称-危害面积统计图",
    "tableName": "pestdisease",
    "fields": [
      {
        "name": "危害面积",
        "type": "n",
        "fieldname": "danger"
      },
      {
        "name": "区域名称",
        "type": "t",
        "fieldname": "region"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "人工草地病虫害镇名-危害面积统计图",
    "tableName": "pestdisease",
    "fields": [
      {
        "name": "危害面积",
        "type": "n",
        "fieldname": "danger"
      },
      {
        "name": "镇名",
        "type": "t",
        "fieldname": "towns"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "人工草地病虫害事件类型-危害面积统计图",
    "tableName": "pestdisease",
    "fields": [
      {
        "name": "危害面积",
        "type": "n",
        "fieldname": "danger"
      },
      {
        "name": "事件类型",
        "type": "t",
        "fieldname": "species"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "人工草地病虫害区域名称-防治面积统计图",
    "tableName": "pestdisease",
    "fields": [
      {
        "name": "防治面积",
        "type": "n",
        "fieldname": "control"
      },
      {
        "name": "区域名称",
        "type": "t",
        "fieldname": "region"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "人工草地病虫害镇名-防治面积统计图",
    "tableName": "pestdisease",
    "fields": [
      {
        "name": "防治面积",
        "type": "n",
        "fieldname": "control"
      },
      {
        "name": "镇名",
        "type": "t",
        "fieldname": "towns"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "鼠害区域名称-毒害面积统计图",
    "tableName": "pestmouse",
    "fields": [
      {
        "name": "毒害面积",
        "type": "n",
        "fieldname": "occurarea"
      },
      {
        "name": "区域名称",
        "type": "t",
        "fieldname": "region"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "鼠害镇名-毒害面积统计图",
    "tableName": "pestmouse",
    "fields": [
      {
        "name": "毒害面积",
        "type": "n",
        "fieldname": "occurarea"
      },
      {
        "name": "镇名",
        "type": "t",
        "fieldname": "towns"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "鼠害老鼠种类-毒害面积统计图",
    "tableName": "pestmouse",
    "fields": [
      {
        "name": "毒害面积",
        "type": "n",
        "fieldname": "occurarea"
      },
      {
        "name": "老鼠种类",
        "type": "t",
        "fieldname": "mousetype"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "鼠害老鼠种类-毒害次数统计图",
    "tableName": "pestmouse",
    "fields": [
      {
        "name": "毒害次数",
        "type": "n",
        "fieldname": "pestrate"
      },
      {
        "name": "老鼠种类",
        "type": "t",
        "fieldname": "mousetype"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "鼠害镇名-毒害次数统计图",
    "tableName": "pestmouse",
    "fields": [
      {
        "name": "毒害次数",
        "type": "n",
        "fieldname": "pestrate"
      },
      {
        "name": "镇名",
        "type": "t",
        "fieldname": "towns"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "鼠害区域名称-毒害次数统计图",
    "tableName": "pestmouse",
    "fields": [
      {
        "name": "毒害次数",
        "type": "n",
        "fieldname": "pestrate"
      },
      {
        "name": "区域名称",
        "type": "t",
        "fieldname": "region"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "虫害区域名称-毒害面积统计图",
    "tableName": "pestinsect",
    "fields": [
      {
        "name": "毒害面积",
        "type": "n",
        "fieldname": "occurarea"
      },
      {
        "name": "区域名称",
        "type": "t",
        "fieldname": "region"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "虫害镇名-毒害面积统计图",
    "tableName": "pestinsect",
    "fields": [
      {
        "name": "毒害面积",
        "type": "n",
        "fieldname": "occurarea"
      },
      {
        "name": "镇名",
        "type": "t",
        "fieldname": "towns"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "产草量统计",
    "tableName": "prosperitysample",
    "fields": [
      {
        "name": "鲜重",
        "type": "n",
        "fieldname": "allfreshweigh"
      },
      {
        "name": "干重",
        "type": "n",
        "fieldname": "alldryweigh"
      },
      {
        "name": "主植物",
        "type": "t",
        "fieldname": "mainweeds"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "产草量主植物-盖度统计图",
    "tableName": "prosperitysample",
    "fields": [
      {
        "name": "盖度",
        "type": "n",
        "fieldname": "plantcover"
      },
      {
        "name": "主植物",
        "type": "t",
        "fieldname": "mainweeds"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "产草量主植物-平均高度统计图",
    "tableName": "prosperitysample",
    "fields": [
      {
        "name": "平均高度",
        "type": "n",
        "fieldname": "avgheight"
      },
      {
        "name": "主植物",
        "type": "t",
        "fieldname": "mainweeds"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "产草量主植物-鲜重统计图",
    "tableName": "prosperitysample",
    "fields": [
      {
        "name": "鲜重",
        "type": "n",
        "fieldname": "allfreshweigh"
      },
      {
        "name": "主植物",
        "type": "t",
        "fieldname": "mainweeds"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "产草量主植物-干重统计图",
    "tableName": "prosperitysample",
    "fields": [
      {
        "name": "干重",
        "type": "n",
        "fieldname": "alldryweigh"
      },
      {
        "name": "主植物",
        "type": "t",
        "fieldname": "mainweeds"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "毒草害区域名称-毒害面积统计图",
    "tableName": "pestweeds",
    "fields": [
      {
        "name": "毒害面积",
        "type": "n",
        "fieldname": "occurarea"
      },
      {
        "name": "区域名称",
        "type": "t",
        "fieldname": "region"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "毒草害镇名-毒害面积统计图",
    "tableName": "pestweeds",
    "fields": [
      {
        "name": "毒害面积",
        "type": "n",
        "fieldname": "occurarea"
      },
      {
        "name": "镇名",
        "type": "t",
        "fieldname": "towns"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "毒草害植物名称-毒害面积统计图",
    "tableName": "pestweeds",
    "fields": [
      {
        "name": "毒害面积",
        "type": "n",
        "fieldname": "occurarea"
      },
      {
        "name": "植物名称",
        "type": "t",
        "fieldname": "weedname"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "毒草害植被类型-毒害面积统计图",
    "tableName": "pestweeds",
    "fields": [
      {
        "name": "毒害面积",
        "type": "n",
        "fieldname": "occurarea"
      },
      {
        "name": "植被类型",
        "type": "t",
        "fieldname": "grass"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "毒草害覆盖度统计",
    "tableName": "pestweeds",
    "fields": [
      {
        "name": "植被覆盖率",
        "type": "n",
        "fieldname": "coverrate"
      },
      {
        "name": "植物名称",
        "type": "t",
        "fieldname": "weedname"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "毒草害区域名称-植被覆盖率统计图",
    "tableName": "pestweeds",
    "fields": [
      {
        "name": "植被覆盖率",
        "type": "n",
        "fieldname": "coverrate"
      },
      {
        "name": "区域名称",
        "type": "t",
        "fieldname": "region"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "毒草害镇名-植被覆盖率统计图",
    "tableName": "pestweeds",
    "fields": [
      {
        "name": "植被覆盖率",
        "type": "n",
        "fieldname": "coverrate"
      },
      {
        "name": "镇名",
        "type": "t",
        "fieldname": "towns"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "人工草地建设年种植面积统计图",
    "tableName": "rgcdjs",
    "fields": [
      {
        "name": "年份",
        "type": "n",
        "fieldname": "date"
      },
      {
        "name": "种植面积",
        "type": "n",
        "fieldname": "zzarea"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "人工草地建设牧草种类-种植面积统计图",
    "tableName": "rgcdjs",
    "fields": [
      {
        "name": "种植面积",
        "type": "n",
        "fieldname": "zzarea"
      },
      {
        "name": "牧草种类",
        "type": "t",
        "fieldname": "mczhonglei"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "人工草地建设镇名-种植面积统计图",
    "tableName": "rgcdjs",
    "fields": [
      {
        "name": "种植面积",
        "type": "n",
        "fieldname": "zzarea"
      },
      {
        "name": "镇名",
        "type": "t",
        "fieldname": "towns"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "人工草地建设牧草类型-种植面积统计图",
    "tableName": "rgcdjs",
    "fields": [
      {
        "name": "种植面积",
        "type": "n",
        "fieldname": "zzarea"
      },
      {
        "name": "牧草类型",
        "type": "t",
        "fieldname": "mctypes"
      },
      {
        "name": "年份",
        "fieldname": "year",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "草原等级、等级1-面积统计",
    "tableName": "grass",
    "fields": [
      {
        "name": "等级",
        "type": "t",
        "fieldname": "deng"
      },
      {
        "name": "面积",
        "type": "n",
        "fieldname": "mctypes"
      },
      {
        "name": "等级1",
        "fieldname": "dengji",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "草原植物类型、等级1-面积统计",
    "tableName": "grass",
    "fields": [
      {
        "name": "植物类型",
        "type": "t",
        "fieldname": "xing"
      },
      {
        "name": "面积",
        "type": "n",
        "fieldname": "mctypes"
      },
      {
        "name": "等级1",
        "fieldname": "dengji",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "草原植物沙化、等级1-面积统计",
    "tableName": "grass",
    "fields": [
      {
        "name": "三化",
        "type": "t",
        "fieldname": "sanhua"
      },
      {
        "name": "面积",
        "type": "n",
        "fieldname": "mctypes"
      },
      {
        "name": "等级1",
        "fieldname": "dengji",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  },
  {
    "chartName": "草原植物亚类、等级1-面积统计",
    "tableName": "grass",
    "fields": [
      {
        "name": "亚类",
        "type": "t",
        "fieldname": "yalei"
      },
      {
        "name": "面积",
        "type": "n",
        "fieldname": "mctypes"
      },
      {
        "name": "等级1",
        "fieldname": "dengji",
        "type": "t"
      }
    ],
    "chartType": [
      "",
      "",
      ""
    ]
  }
]


class barData {
  constructor(chartObj, baseJson) {
    let dataSimple = {
      title: {
        text: ''
      },
      xAxis: {
        name: "种类",
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }],
      legend: {
        data: ['销量']
      },
      yAxis: {},
    }
    Object.assign(this, dataSimple);
    Object.defineProperty(this, "chart", { "value": chartObj, enumerable: false, writeable: true, configurable: true });
    Object.defineProperty(this, "baseJson", { "value": baseJson, enumerable: false, writeable: true, configurable: true });
    this.init();
  }
  drawChart() {
    console.log();
    this.chart.setOption(this);
  }
  init() {
    let data = this.baseJson;
    let dataList = {};
    return data.reduce(function (previousValue, row, index) {
      for (const fieldName in row) {
        if (row.hasOwnProperty(fieldName)) {
          const value = row[fieldName];
          if (previousValue[fieldName]) {
            previousValue[fieldName].push(value);
          } else {
            previousValue[fieldName] = [value];
          }
        }
      }
      return previousValue;
    }, {});

  }
}

$.fn.serializeObject = function () {
  let o = {};
  let a = this.serializeArray();
  $.each(a, function () {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};


function downloadJSON(json, filename = "downFile") {
  let blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
  let reader = new FileReader();
  reader.addEventListener("loadend", function () {
    let pom = document.createElement('a');
    pom.setAttribute('href', reader.result);
    pom.setAttribute('download', filename);
    if (document.createEvent) {
      let event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  });
  reader.readAsDataURL(blob);
}
function formatJson(json) {
  return new Promise(function (ref) {
    let blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
    let reader = new FileReader();
    reader.addEventListener("loadend", function () {
      blob.text().then((string) => {
        ref(string.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;'));
      })
    });
    reader.readAsDataURL(blob);
  });
}
if (window) {
  window.barData = barData;
}