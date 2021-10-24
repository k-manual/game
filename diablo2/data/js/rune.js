
/*
1	엘(El)	엘(El)룬 3개	엘드(Eld)룬 1개
2	엘드(Eld)	엘드(Eld)룬 3개	티르(Tir)룬 1개
3	티르(Tir)	티르(Tir)룬 3개	네프(Nef)룬 1개
4	네프(Nef)	네프(Nef)룬 3개	에드(Eth)룬 1개
5	에드(Eth)	에드(Eth)룬 3개	아이드(Ith)룬 1개
6	아이드(Ith)	아이드(Ith)룬 3개	탈(Tal)룬 1개
7	탈(Tal)	탈(Tal)룬 3개	랄(Ral)룬 1개
8	랄(Ral)	랄(Ral)룬 3개	오르트(Ort)룬 1개
9	오르트(Ort)	오르트(Ort)룬 3개	주울(Thul)룬 1개
10	주울(Thul)	주울(Thul)룬 3개 + 최하급 토파즈 1개	앰(Amn)룬 1개
11	앰(Amn)	앰(Amn)룬 3개 + 최하급 자수정 1개	솔(Sol)룬 1개
12	솔(Sol)	솔(Sol)룬 3개 + 최하급 사파이어 1개	샤에(Sheal)룬 1개
13	샤에(Sheal)	샤에(Sheal)룬 3개 + 최하급 루비 1개	돌(Dol)룬 1개
14	돌(Dol)	돌(Dol)룬 3개 + 최하급 에메랄드 1개	헬(Hel)룬 1개
15	헬(Hel)	헬(Hel)룬 3개 + 최하급 다이아몬드 1개	포(Io)룬 1개
16	포(Io)	포(Io)룬 3개 + 하급 토파즈 1개	룸(Lum)룬 1개
17	룸(Lum)	룸(Lum)룬 3개 + 하급 자수정 1개	코(Ko)룬 1개
18	코(Ko)	코(Ko)룬 3개 + 하급 사파이어 1개	팔(Pal)룬 1개
19	팔(Pal)	팔(Fal)룬 3개 + 하급 루비 1개	렘(Lem)룬 1개
20	렘(Lem)	렘(Lem)룬 2개 + 하급 에메랄드 1개	풀(Pul)룬 1개
21	풀(Pul)	풀(Pul)룬 2개 + 하급 다이아몬드 1개	우움(Um)룬 1개
22	우움(Um)	우움(Um)룬 2개 + 토파즈 1개	말(Mal)룬 1개
23	말(Mal)	말(Mal)룬 2개 + 자수정 1개	아이스트(Ist)룬 1개
24	아이스트(Ist)	아이스트(Ist)룬 2개 + 사파이어 1개	굴(Gul)룬 1개
25	굴(Gul)	굴(Gul)룬 2개 + 루비 1개	벡스(Vex)룬 1개
26	벡스(Vex)	벡스(Vex)룬 2개 + 에메랄드 1개	오움(Ohm)룬 1개
27	오움(Ohm)	오움(Ohm)룬 2개 + 다이아몬드 1개	로(Lo)룬 1개
28	로(Lo)	로(Lo)룬 2개 + 상급 토파즈 1개	수르(Sur)룬 1개
29	수르(Sur)	수르(Sur)룬 2개 + 상급 자수정 1개	베르(Ber)룬 1개
30	베르(Ber)	베르(Ber)룬 2개 + 상급 사파이어 1개	자(Jah)룬 1개
31	자(Jah)	자(Jah)룬 2개 + 상급 루비 1개	참(Cham)룬 1개
32	참(Cham)	참(Cham)룬 2개 + 상급 에메랄드 1개	조드(Zod)룬 1개
33	조드(Zod)
*/
var rune_master = {

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El) 3개'
    },

    2: {
        seq: '2',
        name: '엘드(Eld)',
        union: '엘드(Eld) 3개'
    },

    3: {
        seq: '3',
        name: '티르(Tir)',
        union: '티르(Tir) 3개'
    },

    4: {
        seq: '4',
        name: '네프(Nef)',
        union: '네프(Nef) 3개'
    },

    5: {
        seq: '5',
        name: '에드(Eth)',
        union: '에드(Eth) 3개'
    },

    6: {
        seq: '6',
        name: '아이드(Ith)',
        union: '아이드(Ith) 3개'
    },

    7: {
        seq: '7',
        name: '탈(Tal)',
        union: '탈(Tal) 3개'
    },

    8: {
        seq: '8',
        name: '랄(Ral)',
        union: '랄(Ral) 3개'
    },

    9: {
        seq: '9',
        name: '오르트(Ort)',
        union: '오르트(Ort) 3개'
    },

    10: {
        seq: '10',
        name: '주울(Thul)',
        union: '주울(Thul) 3개 + 최하급 토파즈 1개'
    },

    11: {
        seq: '11',
        name: '앰(Amn)',
        union: '앰(Amn) 3개 + 최하급 자수정 1개'
    },

    12: {
        seq: '12',
        name: '솔(Sol)',
        union: '솔(Sol)룬 3개 + 최하급 사파이어 1개'
    },

    13: {
        seq: '13',
        name: '샤에(Sheal)',
        union: '샤에(Sheal) 3개 + 최하급 루비 1개'
    },

    14: {
        seq: '14',
        name: '돌(Dol)',
        union: '돌(Dol) 3개 + 최하급 에메랄드 1개'
    },

    15: {
        seq: '15',
        name: '헬(Hel)',
        union: '헬(Hel)룬 3개 + 최하급 다이아몬드 1개'
    },

    16: {
        seq: '16',
        name: '포(Io)',
        union: '포(Io) 3개 + 하급 토파즈 1개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

    1: {
        seq: '1',
        name: '엘(El)',
        union: '엘(El)룬 3개'
    },

}
