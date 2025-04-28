var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

var data = [
  {
    name: "Requirement \n Engineering 9",
    itemStyle: {
      color: "#b3c7db",
    },
    label: {
      fontSize: 14, // 设置字体大小
      rotate: 80,
      // color: "#333", // 设置字体颜色
      // fontFamily: "Times New Roman", // 设置字体类型
    },
    children: [
      {
        name: "Elicitation 3",
        itemStyle: {
          color: "#b3c7db",
        },
        children: [
          {
            name: "Pure",
            value: 1,
            itemStyle: {
              color: "#b3c7db",
            },
          },
          {
            name: "Jain's",
            value: 1,
            itemStyle: {
              color: "#b3c7db",
            },
          },
          {
            name: "CPSBENCH",
            value: 1,
            itemStyle: {
              color: "#b3c7db",
            },
          },
        ],
      },
      {
        name: "classification 1",
        itemStyle: {
          color: "#b3c7db",
        },
        label: {
          fontSize: 9, // 设置字体大小
        },
        children: [
          {
            name: "PROMISE",
            value: 1,
            itemStyle: {
              color: "#b3c7db",
            },
          },
        ],
      },
      {
        name: "Modeling 1",
        itemStyle: {
          color: "#b3c7db",
        },
        label: {
          fontSize: 9, // 设置字体大小
        },
        children: [
          {
            name: "Ferrari's",
            value: 1,
            itemStyle: {
              color: "#b3c7db",
            },
          },
        ],
      },
      {
        name: "Specification 1",
        itemStyle: {
          color: "#b3c7db",
        },
        label: {
          fontSize: 9, // 设置字体大小
        },
        children: [
          {
            name: "Krishna's",
            value: 1,
            itemStyle: {
              color: "#b3c7db",
            },
          },
        ],
      },
      {
        name: "Validation 3",
        itemStyle: {
          color: "#b3c7db",
        },
        children: [
          {
            name: "Reinpold'",
            value: 1,
            itemStyle: {
              color: "#b3c7db",
            },
          },
          {
            name: "REQuestA",
            value: 1,
            itemStyle: {
              color: "#b3c7db",
            },
          },
          {
            name: "rSDE-Bench",
            value: 1,
            itemStyle: {
              color: "#b3c7db",
            },
          },
        ],
      },
      {
        name: "Management 0",
        itemStyle: {
          color: "#FFFFFF",
        },
        label: {
          fontSize: 9, // 设置字体大小
          // color: "#333", // 设置字体颜色
          // fontFamily: "Times New Roman", // 设置字体类型
        },
        children: [
          {
            name: "None",
            value: 1,
            itemStyle: {
              color: "#FFFFFF",
            },
          },
        ],
      },
    ],
  },
  {
    name: "Software \n Design 5",
    itemStyle: {
      color: "#C4A5DE",
    },
    label: {
      fontSize: 12, // 设置字体大小
      rotate: 60,
      // color: "#333", // 设置字体颜色
      // fontFamily: "Times New Roman", // 设置字体类型
    },
    children: [
      {
        name: "Architectural Design 0",
        itemStyle: {
          color: "#FFFFFF",
        },
        label: {
          fontSize: 8, // 设置字体大小
        },
        children: [
          {
            name: "None",
            value: 1,
            itemStyle: {
              color: "#FFFFFF",
            },
          },
        ],
      },
      {
        name: "Algorithm Design 1",
        itemStyle: {
          color: "#C4A5DE",
        },
        label: {
          fontSize: 8, // 设置字体大小
        },
        children: [
          {
            name: "CLRS",
            value: 1,
            itemStyle: {
              color: "#C4A5DE",
            },
          },
        ],
      },
      {
        name: "Database design 0",
        itemStyle: {
          color: "#FFFFFF",
        },
        label: {
          fontSize: 8, // 设置字体大小
        },
        children: [
          {
            name: "None",
            value: 1,
            itemStyle: {
              color: "#FFFFFF",
            },
          },
        ],
      },
      {
        name: "UI Design 4",
        itemStyle: {
          color: "#C4A5DE",
        },
        children: [
          {
            name: "Rico",
            value: 1,
            itemStyle: {
              color: "#C4A5DE",
            },
          },
          {
            name: "SCapRepo and ScreenRepo",
            value: 1,
            itemStyle: {
              color: "#C4A5DE",
            },
          },
          {
            name: "Screen2words",
            value: 1,
            itemStyle: {
              color: "#C4A5DE",
            },
          },
          {
            name: "ReDraw",
            value: 1,
            itemStyle: {
              color: "#C4A5DE",
            },
          },
        ],
      },
    ],
  },
  {
    name: "Software \nDevelopment \n94",
    itemStyle: {
      color: "#A1A9D0",
    },
    label: {
      fontSize: 16, // 设置字体大小
      // rotate: 30,
      // color: "#333", // 设置字体颜色
      // fontFamily: "Times New Roman", // 设置字体类型
    },
    children: [
      {
        name: "Code Generation 55",
        itemStyle: {
          color: "#A1A9D0",
        },
        children: [
          {
            name: "HumanEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "HumanEval+",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "HumanEval-ET",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MBPP",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MBPP+",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MBPP-ET",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "BigCodeBench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "ClassEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "SWE-bench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "ConCode",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CoderEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "EvoCodeBench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "HumanEvo",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CoNaLa",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "PragmaticCode",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "FEA-Bench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Deveval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "HumanEval-X",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MathQA-X",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MBXP",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MultiPL-T",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Multilingual HumanEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "R-benchmark",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Rtl-repo",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Verilogeval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "ChiBench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "FVEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "APPS",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CodeContests",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "LiveCodeBench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "LeetCode",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CodeForces",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MMCode",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Plot2Code",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Spider2-v",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Web2code",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Design2Code",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MatPlotBench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "BabelBench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "DS-1000",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "RoboScript",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "PathBench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CoBRA",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Robotouille",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "EPIC-Kitchens",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "BioCoder",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MLAgentBench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "ML-bench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Deep-Bench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },

          {
            name: "CoBRA",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Robotouille",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "EPIC-Kitchens",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "BioCoder",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MLAgentBench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "ML-bench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Deep-Bench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "JuICe",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Exec-CSN",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Race",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "LessLeak-Bench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Domaineval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "StudentEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
        ],
      },
      {
        name: "Text-to-SQL 12",
        itemStyle: {
          color: "#A1A9D0",
        },
        children: [
          {
            name: "WikiSQL",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Spider",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Spider-Syn",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Spider-DK",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Spider-Realistic",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },

          {
            name: "CSPIDER",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "BIRD",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "KaggleDBQA",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CoSQL",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "EHRSQL",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "Termite",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
        ],
      },
      {
        name: "Code Completion 3",
        itemStyle: {
          color: "#A1A9D0",
        },
        children: [
          {
            name: "RepoBench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "RepoEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CrossCodeEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
        ],
      },
      {
        name: "Code Understanding\n and Reasoning 13",
        itemStyle: {
          color: "#A1A9D0",
        },
        children: [
          {
            name: "Infibench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CodeQA",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CS1QA",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CoSQA",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CoSQA+",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "DQABench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CRUXEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: " CRUXEVAL-X",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CodeMMLU",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "REval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },

          {
            name: "CodeApex",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "SpecEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "FAUN-Eval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
        ],
      },
      {
        name: "Code Translation 4",
        itemStyle: {
          color: "#A1A9D0",
        },
        children: [
          {
            name: "PolyHumanEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MCEval",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CodeTransOcean",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "MultiPL-E",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
        ],
      },
      {
        name: "Code Summarization 3",
        itemStyle: {
          color: "#A1A9D0",
        },
        children: [
          {
            name: "CODE-NN",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },

          {
            name: "DeepCom",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "TL-CodeSum",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
        ],
      },
      {
        name: "Type Inference 2",
        itemStyle: {
          color: "#A1A9D0",
        },
        children: [
          {
            name: "Lambdanet",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "IdBench",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
        ],
      },
      {
        name: "Code Retrieval 2",
        itemStyle: {
          color: "#A1A9D0",
        },
        children: [
          {
            name: "DeepCS",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
          {
            name: "CodeSearchNet",
            value: 1,
            itemStyle: {
              color: "#A1A9D0",
            },
          },
        ],
      },
    ],
  },
  {
    name: "Testing \n26",
    itemStyle: {
      color: "#e6c9b3",
    },
     label: {
      fontSize: 16, // 设置字体大小
      rotate: 30,
      // color: "#333", // 设置字体颜色
      // fontFamily: "Times New Roman", // 设置字体类型
    },
    children: [
      {
        name: "Vulnerability Detection 16",
        itemStyle: {
          color: "#e6c9b3",
        },
        children: [
          {
            name: "GREAT",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "MVD",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "FormAI",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },

          {
            name: "DiverseVul",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "Devign",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "Big-Vul",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "REVEAL",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "VulDeePecker",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "VulnPatchPairs",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "SySeVR",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "PrimeVul",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "Draper",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "VUDENC",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "Juliet",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "CrossVul",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "CVEfixes",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
        ],
      },
      {
        name: "Test Generation 4",
        itemStyle: {
          color: "#e6c9b3",
        },
        children: [
          {
            name: "Refactory",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "Methods2Test",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "SF110",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "SWTBench",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
        ],
      },

      {
        name: "Assertion Generation 1",
        itemStyle: {
          color: "#e6c9b3",
        },
        label: {
          fontSize: 8, // 设置字体大小
        },

        children: [
          {
            name: "kande's benchmark",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
        ],
      },
      {
        name: "Code editing 2",

        itemStyle: {
          color: "#e6c9b3",
        },
        children: [
          {
            name: "PYCOMMITS",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "CoEdPilot",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
        ],
      },
      {
        name: "Defect Detections 3",
        itemStyle: {
          color: "#e6c9b3",
        },
        children: [
          {
            name: "JIT-Defects4J",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "Bears",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
          {
            name: "Bugs.jar",
            value: 1,
            itemStyle: {
              color: "#e6c9b3",
            },
          },
        ],
      },
    ],
  },
  {
    name: "Software \nMaintenance \n21",
    itemStyle: {
      color: "#F0988C",
    },
         label: {
      fontSize: 16, // 设置字体大小
      rotate: 333,
      // color: "#333", // 设置字体颜色
      // fontFamily: "Times New Roman", // 设置字体类型
    },
    children: [
      {
        name: "Program Repair 6",
        itemStyle: {
          color: "#F0988C",
        },
        children: [
          {
            name: "Defects4J",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "QuixBugs",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "HUMANEVALFIX",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "ManyBugs",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "BugsInPy",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "TypeBugs",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
        ],
      },
      {
        name: "Log Parsing 3",
        itemStyle: {
          color: "#F0988C",
        },
        children: [
          {
            name: "Loghub",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "LogPM",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "Loghub-2.0",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          //   {
          //   name: "AL-bench",
          //   value: 1,
          //   itemStyle: {
          //     color: "#F0988C",
          //   },
          // },
        ],
      },
      {
        name: "Vulnerability Repair 5",
        itemStyle: {
          color: "#F0988C",
        },
        children: [
          {
            name: "Vul4j",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "ManyVuls4J",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },

          {
            name: "VjBench",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "VJBench-trans",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "ExtractFix",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
        ],
      },
      {
        name: "Decompilation 2",
        itemStyle: {
          color: "#F0988C",
        },
        children: [
          {
            name: "WaDec",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "ExeBench",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
        ],
      },
      {
        name: "API Misuse Detection 2",
        itemStyle: {
          color: "#F0988C",
        },
        children: [
          {
            name: "ROBUSTAPI",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "APIMU4C",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
        ],
      },
      {
        name: "Code Clone Detection 3",
        itemStyle: {
          color: "#F0988C",
        },
        children: [
          {
            name: "POJ104",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "CodeNet",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
          {
            name: "BigCloneBench",
            value: 1,
            itemStyle: {
              color: "#F0988C",
            },
          },
        ],
      },
    ],
  },
  // Multi-task and Cross-stage
  {
    name: "  ",
    itemStyle: {
      color: "#599CB4",
    },
  
    children: [
      {
        name: "Multi-task and Cross-stage 5",
        itemStyle: {
          color: "#599CB4",
        },
        children: [
          {
            name: "Xcodeeval",
            value: 1,
            itemStyle: {
              color: "#599CB4",
            },
          },
          {
            name: "CodeXGLUE",
            value: 1,
            itemStyle: {
              color: "#599CB4",
            },
          },
          {
            name: "CodeScope",
            value: 1,
            itemStyle: {
              color: "#599CB4",
            },
          },
          {
            name: "HumanEvalPack",
            value: 1,
            itemStyle: {
              color: "#599CB4",
            },
          },
          {
            name: "DevBench",
            value: 1,
            itemStyle: {
              color: "#599CB4",
            },
          },
        ],
      },
    ],
  },

  {
    name: "Non-\nFunctional \n16",
    itemStyle: {
      color: "#fcBB44",
    },
         label: {
      fontSize: 16, // 设置字体大小
      rotate: 290,
      // color: "#333", // 设置字体颜色
      // fontFamily: "Times New Roman", // 设置字体类型
    },
    children: [
      {
        name: "Robustness 1",
        value: 1,
        itemStyle: {
          color: "#fcBB44",
        },
        label: {
          fontSize: 8, // 设置字体大小
        },
        children: [
          {
            name: "ReCode",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
        ],
      },
      {
        name: "Security 3",
        itemStyle: {
          color: "#fcBB44",
        },
        children: [
          {
            name: "RedCode",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
          {
            name: "RMCBench",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
          {
            name: "AdvBench",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
        ],
      },
      {
        name: "Copyright 2",
        itemStyle: {
          color: "#fcBB44",
        },
        children: [
          {
            name: "HMCorp",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
          {
            name: "Dα-C8",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
        ],
      },
      {
        name: "Efficiency 6",
        itemStyle: {
          color: "#fcBB44",
        },
        children: [
          {
            name: "ECCO",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
          {
            name: "EffiBench",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
          {
            name: "GEC",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
          {
            name: "Mercury",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
          {
            name: "EvalPerf",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
          {
            name: "ENAMEL",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
        ],
      },
      {
        name: "Bias 2",
        itemStyle: {
          color: "#fcBB44",
        },
        children: [
          {
            name: "FairCoder",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
          {
            name: "SocialBias-Bench",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
        ],
      },
      {
        name: "Alignment with human 1",
        itemStyle: {
          color: "#fcBB44",
        },
        label: {
          fontSize: 8, // 设置字体大小
        },
        children: [
          {
            name: "CodeArena",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
        ],
      },

      {
        name: "Explainability 1",
        itemStyle: {
          color: "#fcBB44",
        },
        label: {
          fontSize: 8, // 设置字体大小
        },
        children: [
          {
            name: "Galeras",
            value: 1,
            itemStyle: {
              color: "#fcBB44",
            },
          },
        ],
      },
      {
        name: "Privacy 0",
        itemStyle: {
          color: "#FFFFFF",
        },
        children: [
          {
            name: "None",
            value: 1,
            itemStyle: {
              color: "#FFFFFF",
            },
          },
        ],
      },
    ],
  },
];

option = {
  title: {
    text: "1",
    subtext: "1",
    textStyle: {
      fontSize: 2,
      align: "center",
    },
    subtextStyle: {
      align: "center",
    },
    sublink: "",
  },
  series: {
    type: "sunburst",
    data: data,
    radius: [0, "95%"],
    sort: undefined,
    emphasis: {
      focus: "ancestor",
    },
    levels: [
      {},
      {
        r0: "15%",
        r: "35%",
        itemStyle: {
          borderWidth: 2,
        },
        label: {
          rotate: "tangential",
        },
      },
      {
        r0: "35%",
        r: "70%",
        label: {
          align: "right",
        },
      },
      {
        r0: "70%",
        r: "72%",
        label: {
          position: "outside",
          padding: 3,
          silent: false,
        },
        itemStyle: {
          borderWidth: 3,
        },
      },
    ],
  },
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}




window.addEventListener("resize", myChart.resize);
