const normal = {
    番茄: {
        Tulips: true,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    西瓜: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: false,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    草莓: {
        Tulips: true,
        Pepper: false,
        Amber: true,
        Indigo: true,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    蜜瓜: {
        Tulips: false,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    芜菁: {
        Tulips: false,
        Pepper: true,
        Amber: true,
        Indigo: true,
        Days: "较短",
        Seed: 0,
        Price: 0,
    },
    土豆: {
        Tulips: true,
        Pepper: false,
        Amber: false,
        Indigo: true,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    胡萝卜: {
        Tulips: false,
        Pepper: false,
        Amber: true,
        Indigo: true,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    甘薯: {
        Tulips: false,
        Pepper: false,
        Amber: true,
        Indigo: false,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
}
const synthesize = {
    西茄: {
        Tulips: true,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    莓茄: {
        Tulips: true,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    蜜茄: {
        Tulips: true,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "较长",
        Seed: 0,
        Price: 0,
    },
    西莓: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    西蜜瓜: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    蜜莓: {
        Tulips: true,
        Pepper: false,
        Amber: true,
        Indigo: true,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    土菁: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: true,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    萝菁: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: true,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    芜薯: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: true,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    土萝卜: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: true,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    土薯: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: true,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    胡薯: {
        Tulips: false,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    茄菁: {
        Tulips: true,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    土茄: {
        Tulips: true,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    胡茄: {
        Tulips: true,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    甘茄: {
        Tulips: true,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    西菁: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    土西瓜: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    萝瓜: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    甘西瓜: {
        Tulips: true,
        Pepper: true,
        Amber: false,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    芜茄: {
        Tulips: true,
        Pepper: false,
        Amber: true,
        Indigo: true,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    土莓: {
        Tulips: true,
        Pepper: false,
        Amber: true,
        Indigo: true,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    胡莓: {
        Tulips: true,
        Pepper: false,
        Amber: true,
        Indigo: true,
        Days: "较长",
        Seed: 0,
        Price: 0,
    },
    草薯: {
        Tulips: true,
        Pepper: false,
        Amber: true,
        Indigo: true,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    蜜菁: {
        Tulips: false,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "较长",
        Seed: 0,
        Price: 0,
    },
    土蜜瓜: {
        Tulips: false,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略长",
        Seed: 0,
        Price: 0,
    },
    胡蜜: {
        Tulips: false,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
    甘蜜瓜: {
        Tulips: false,
        Pepper: true,
        Amber: true,
        Indigo: false,
        Days: "略短",
        Seed: 0,
        Price: 0,
    },
}
const blue = {}
const rare = {}
const tree = {}
const tree_synthesize = {}
const tree_rare = {}