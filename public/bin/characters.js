/*
Thanks to SegGel2009 for making the color guide that I used as reference.
Link to the guide: https://steamcommunity.com/sharedfiles/filedetails/?id=915991216
*/

const characters = [
    {
        //Ragna the Bloodedge
        name: "Ragna the Bloodedge",
        img: "ragna.png",
        internal: "rg",
        colors:[
            {
                name:"Skin",
                pointer:0x24,
                count:4
            },
            {
                name:"Hair",
                pointer:0x34,
                count:3
            },
            {
                name:"Jacket",
                pointer:0x40,
                count:4
            },
            {
                name:"Jacket Lines",
                pointer:0x50,
                count:3
            },
            {
                name:"Gold Parts",
                pointer:0x5C,
                count:3
            },
            {
                name:"Pants and Shirt",
                pointer:0x68,
                count:4
            },
            {
                name:"Gloves",
                pointer:0x78,
                count:3
            },
            {
                name:"Belts",
                pointer:0x84,
                count:3
            },
            {
                name:"Metal",
                pointer:0x90,
                count:3
            },
            {
                name:"Eyebrows",
                pointer:0x9C,
                count:1
            },
            {
                name:"Sclera and Shine",
                pointer:0xA0,
                count:2
            },
            {
                name:"Red Eye",
                pointer:0xA8,
                count:3
            },
            {
                name:"Green Eye",
                pointer:0xB4,
                count:3
            },
            {
                name:"Inside Mouth",
                pointer:0xC0,
                count:2
            },
            {
                name:"Sword Handle",
                pointer:0xE0,
                count:3
            },
            {
                name:"Sword Blade",
                pointer:0xF0,
                count:3
            },
            {
                name:"Handle Gem",
                pointer:0x100,
                count:3
            },
            {
                name:"Blade Accent",
                pointer:0x110,
                count:3
            },
            {
                name:"Darkness Claw",
                pointer:0x364,
                count:11
            },
            {
                name:"Fire",
                pointer:0x3A4,
                count:11
            }
        ],
        imgBase:[[[203,237,255],[134,202,240],[72,137,210],[50,80,120]],[[53,137,255],[31,102,208],[9,66,161]],[[107,251,81],[72,181,54],[36,110,27],[0,39,0]],[[202,202,194],[160,160,152],[51,49,48]],[[0,133,255],[0,99,171],[0,64,86]],[[141,150,255],[98,103,215],[55,56,175],[11,8,135]],[[253,88,131],[178,44,88],[103,0,45]],[[43,53,255],[32,38,167],[21,23,79]],[[122,255,255],[72,191,206],[0,94,122]],[[10,10,10]],[[240,240,240],[154,145,145]],[[108,104,255],[55,52,175],[5,2,79]],[[99,234,26],[46,131,0],[42,74,25]],[[56,69,210],[56,118,255]],[[143,79,255],[99,40,191],[54,0,126]],[[255,201,167],[255,145,108],[255,88,49]],[[229,240,255],[168,174,181],[107,107,107]],[[229,0,184],[139,0,92],[49,0,0]],[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]]],
        byteSize:0x420
    },
    {
        //Jin Kisaragi
        name: "Jin Kisaragi",
        img: "jin.png",
        internal: "jn",
        colors:[
            {
                name:"Jacket Lines",
                pointer:0x24,
                count:3
            },
            {
                name:"Skin",
                pointer:0x30,
                count:4
            },
            {
                name:"Hair",
                pointer:0x40,
                count:4
            },
            {
                name:"Jacket",
                pointer:0x50,
                count:4
            },
            {
                name:"Eyes",
                pointer:0x60,
                count:3
            },
            {
                name:"Shirt and Gloves",
                pointer:0x6C,
                count:3
            },
            {
                name:"Inside Jacket",
                pointer:0x78,
                count:4
            },
            {
                name:"Pants",
                pointer:0x88,
                count:3
            },
            {
                name:"Plate",
                pointer:0x94,
                count:3
            },
            {
                name:"Metal",
                pointer:0xA0,
                count:4
            },
            {
                name:"Sclera",
                pointer:0xB0,
                count:3
            },
            {
                name:"Inside Mouth",
                pointer:0xBC,
                count:2
            },
            {
                name:"Sword Metal",
                pointer:0xE0,
                count:3
            },
            {
                name:"Scabbard",
                pointer:0xEC,
                count:3
            },
            {
                name:"Grip",
                pointer:0xF8,
                count:3
            },
            {
                name:"Sword Blade",
                pointer:0x104,
                count:4
            }
        ],
        imgBase:[[[96,98,0],[210,173,0],[255,255,94]],[[63,101,150],[106,156,219],[163,194,234],[203,226,255]],[[56,56,58],[99,99,96],[131,129,135],[171,165,171]],[[101,0,71],[188,0,129],[219,0,184],[210,99,204]],[[0,0,141],[66,77,188],[133,131,255]],[[66,166,255],[135,195,255],[167,255,255]],[[1,68,113],[2,92,139],[32,118,201],[0,201,236]],[[0,66,0],[38,143,19],[83,199,83]],[[2,8,84],[26,24,152],[0,41,216]],[[69,0,0],[163,43,49],[210,105,98],[255,156,156]],[[10,10,10],[154,145,145],[240,240,240]],[[15,47,169],[24,77,203]],[[102,56,224],[178,101,255],[236,171,255]],[[13,73,255],[0,113,255],[83,180,255]],[[66,66,0],[139,139,0],[191,214,0]],[[0,0,176],[0,0,255],[71,77,255],[114,122,255]]],
        byteSize:0x420
    },
    {
        //Noel Vermillion
        name:"Noel Vermillion",
        img:"noel.png",
        internal:"no",
        colors:[
            {
                name:"Jacket Lines and Cape",
                pointer:0x24,
                count:3
            },
            {
                name:"Skin",
                pointer:0x30,
                count:4
            },
            {
                name:"Hair",
                pointer:0x40,
                count:3
            },
            {
                name:"Uniform",
                pointer:0x4C,
                count:4
            },
            {
                name:"Eyes",
                pointer:0x5C,
                count:3
            },
            {
                name:"Shirt and Gloves",
                pointer:0x68,
                count:3
            },
            {
                name:"Tie and Others",
                pointer:0x74,
                count:3
            },
            {
                name:"Belt and Others",
                pointer:0x80,
                count:4
            },
            {
                name:"Thigh Highs",
                pointer:0x90,
                count:4
            },
            {
                name:"Metal",
                pointer:0xA0,
                count:5
            },
            {
                name:"Sclera",
                pointer:0xB8,
                count:2
            },
            {
                name:"Inside Mouth",
                point:0xC0,
                count:2
            },
            {
                name:"Machine Gun Grip",
                pointer:0xD0,
                count:5
            },
            {
                name:"Bolverk",
                pointer:0xE4,
                count:4
            },
            {
                name:"Bullet Shells",
                pointer:0xF4,
                count:3
            },
            {
                name:"Machine Gun Barrel",
                pointer:0x100,
                count:4
            },
            {
                name:"Green Shark Missile",
                pointer:0x114,
                count:3
            }
        ],
        imgBase:[[[0,109,0],[26,128,66],[118,195,154]],[[63,101,150],[95,149,215],[145,187,242],[198,223,251]],[[99,96,96],[176,169,167],[204,206,203]],[[90,51,137],[108,75,203],[159,90,206],[180,137,233]],[[51,0,154],[0,0,242],[105,107,255]],[[30,199,169],[103,229,197],[173,239,232]],[[13,30,71],[19,40,93],[21,17,150]],[[79,0,79],[137,0,126],[189,0,182],[200,129,200]],[[86,81,24],[152,144,56],[221,229,90],[255,255,165]],[[114,0,0],[255,58,56],[255,116,103],[255,152,158],[255,212,206]],[[154,145,145],[240,238,240]],[[72,72,72],[72,72,72]],[[71,28,34],[103,40,48],[139,53,64],[190,85,99],[226,146,148]],[[193,130,208],[100,0,255],[184,99,255],[230,182,230]],[[0,96,180],[30,143,245],[95,179,255]],[[46,46,46],[63,63,63],[101,101,101],[129,129,129]],[[119,141,70],[92,93,43],[48,41,19]]],
        byteSize:0x420
    },
    {
        //Alucard
        name:"Alucard"
        //nobody cares lol, time to work on taokaka
    },
    {
        //Taokaka
        name:"Taokaka",
        img:"taokaka.png",
        internal:"tk",
        colors:[

        ],
        imgBase:[],
        byteSize:0x0
    }
]
