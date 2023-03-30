var arr, stop, time_left = 60,
            arr_pointer = 0,
            correct = 0,
            incorrect = 0,
            n = 0,
            keystrokes = 0,
            accuracy = 0,
            seconds_passed = 0;

        function timer() {
            var k = document.getElementById("time-elapsed");
            k.innerHTML = time_left, -1 == --time_left ? (accuracy = Math.floor(correct / (correct + incorrect) * 100), clearTimeout(stop), document.getElementById("typing_space").value = "समय समाप्त HINDITYPINGTEST.IN", gross_wpm = Math.round((correct + incorrect) / (600 - seconds_passed) * 60), wpm = Math.round(gross_wpm - incorrect / (600 - seconds_passed) * 60), (wpm < 0 || 0 == accuracy) && (wpm = 0), document.getElementById("display_space").innerHTML = '<div style="margin-left:10px"><table class="table table-bordered" style="font-size:20px;margin-bottom:0 ;margin-top : 7px"><tr><td><span>Correct : ' + correct + "</span></td><td><span>Incorrect = " + incorrect + "</span></td></tr><tr><td>Keystrokes : " + keystrokes + "</td><td>Accuracy : " + accuracy + '%</td></tr><tr style="text-align:center"><td colspan = "2"><span>Words Per Minute : ' + wpm + "</span></td></tr><div>", $('input[type="text"], textarea').attr("readonly", "readonly")) : stop = setTimeout("timer()", 1e3), time_left <= 24 && (k.style.color = "orange"), time_left <= 14 && (k.style.color = "red")
        }

        function initialize() {
            var k = new Array;
            k[1] = "tkuojksa esa x/kk lcls t~;knk cqf)eku le>k tkrk gSA ge tc fdlh vkneh dks igys ntsZ dk csodwQ dguk pkgrs gSa] rks mls x/kk dgrs gSaA x/kk lpeqp csodwQ gS ;k mlds lh/ksiu] mldh fujkin lfg\".kqrk us mls ;g inoh ns nh gS] bldk fu'p; ugha fd;k tk ldrkA xk;sa lhax ekjrh gSa] C;kgh gqbZ xk; rks vuk;kl gh flaguh dk :i /kkj.k dj ysrh gSA dqÙkk Hkh cgqr xjhc tkuoj gS] ysfdu dHkh&dHkh mls Hkh Øks/k vk gh tkrk gS] fdUrq x/ks dks dHkh Øks/k djrs ugha lquk] u ns[kkA ftruk pkgks xjhc dks ekjks] pkgs tSlh [kjkc] lM+h gqbZ ?kkl lkeus Mky nks] mlds psgjs ij dHkh vlarks\"k dh Nk;k Hkh ugha fn[kkbZ nsxhA oS'kk[k esa pkgs ,dk/k ckj dqysy dj ysrk gS] ij geus rks mls dHkh [kq'k gksrs ugha ns[kkA mlds psgjs ij LFkkbZ fo\"kkn LFkk;h :i ls Nk;k jgrk gSA lq[k&nq%[k] gkfu&ykHk fdlh Hkh n'kk esa mls cnyrs ugha ns[kkA _f\"k;ksa&eqfu;ksa ds ftrus xq.k gSa] os lHkh mlesa ijkdk\"Bk dks igq¡p x, gSa] ij vkneh mls csodwQ dgrk gSA ln~xq.kksa dk bruk vuknj!dnkfpr lh/kkiu lalkj ds fy, mi;qä ugha gSA nsf[k, u] Hkkjrokfl;ksa dh vÝhdk esa D;k nqnZ'kk gks jgh gS  D;ksa vejhdk esa mUgsa ?kqlus ugha fn;k tkrk cspkjs 'kjkc ugha ihrs] pkj iSls dqle; ds fy, cpkdj j[krs gSa] th rksM+dj dke djrs gSa] fdlh ls yM+kbZ&>xM+k ugha djrs] pkj ckrsa lqudj xe [kk tkrs gSa fQj Hkh cnuke gSaA dgk tkrk gS] os thou ds vkn'kZ dks uhpk djrs gSaA vxj os bZaV dk tokc iRFkj ls nsuk lh[k tkrs rks 'kk;n lH; dgykus yxrsA tkiku dh felky lkeus gSA ,d gh fot; us mls lalkj dh lH; tkfr;ksa esa x.; cuk fn;kA ysfdu x/ks dk ,d NksVk HkkbZ vkSj Hkh gS] tks mlls de gh x/kk gSA vkSj og gS ^cSy*A ftl vFkZ esa ge ^x/kk^ dk ç;ksx djrs gSa] dqN mlh ls feyrs&tqyrs vFkZ esa ^cfN;k ds rkÅ* dk Hkh ç;ksx djrs gSaA dqN yksx cSy dks 'kk;n csodwQh esa loZJs\"B dgsaxs] exj gekjk fopkj ,slk ugha gSA cSy dHkh&dHkh ekjrk Hkh gS] dHkh&dHkh vfM+;y cSy Hkh ns[kus esa vkrk gSA vkSj Hkh dbZ jhfr;ksa ls viuk vlarks\"k çdV dj nsrk gS] vr,oa mldk LFkku x/ks ls uhpk gSA>wjh d ikl nks cSy Fks& ghjk vkSj eksrhA ns[kus esa lqanj] dke esa pkSdl] Mhy esa ÅapsA cgqr fnuksa lkFk jgrs&jgrs nksuksa esa HkkbZpkjk gks x;k FkkA nksuksa vkeus&lkeus ;k vkl&ikl cSBs gq, ,d&nwljs ls ewd Hkk\"kk esa fopkj&fofue; fd;k djrs FksA ,d&nwljs ds eu dh ckr dks dSls le>k tkrk gS] ge dg ugha ldrsA vo'; gh muesa dksbZ ,slh xqIr 'kfä Fkh] ftlls thoksa esa Js\"Brk dk nkok djus okyk euq\"; oafpr gSA nksuksa ,d&nwljs dks pkVdj lw¡?kdj viuk çse çdV djrs] dHkh&dHkh nksuksa lhax Hkh feyk fy;k djrs Fks] foxzg ds ukrs ls ugha] dsoy fouksn ds Hkko ls] vkReh;rk ds Hkko ls] tSls nksuksa esa ?kfu\"Brk gksrs gh /kkSy&/kIik gksus yxrk gSA blds fcuk nksLrh dqN QqlQlh] dqN gYdh&lh jgrh gS] fQj t~;knk fo'okl ugha fd;k tk ldrkA ftl oä ;s nksuksa cSy gy ;k xkM+h esa tksr fn, tkrs vkSj xjnu fgyk&fgykdj pyrs] ml le; gj ,d dh ps\"Vk gksrh fd t~;knk&ls&t~;knk cks> esjh gh xnZu ij jgsA fnu&Hkj ds ckn nksigj ;k la/;k dks nksuksa [kqyrs rks ,d&nwljs dks pkV&pwV dj viuh Fkdku feVk fy;k djrs] ukan esa [kyh&Hkwlk iM+ tkus ds ckn nksuksa lkFk mBrs] lkFk ukan esa eq¡g Mkyrs vkSj lkFk gh cSBrs FksA ,d eq¡g gVk ysrk rks nwljk Hkh gVk ysrk FkkAla;ksx dh ckr] >wjh us ,d ckj xksbZa dks llqjky Hkst fn;kA cSyksa dks D;k ekywe] os dgk¡ Hksts tk jgs gSaA le>s] ekfyd us gesa csp fn;kA viuk ;ksa cspk tkuk mUgsa vPNk yxk ;k cqjk] dkSu tkus] ij >wjh ds lkys x;k dks ?kj rd xksbZa ys tkus esa nkarksa ilhuk vk x;kA ihNs ls gkadrk rks nksuksa nk,¡&ck¡, Hkkxrs] ixfg;k idM+dj vkxs ls [khaprk rks nksuksa ihNs dh vksj tksj yxkrsA ekjrk rks nksuksa lhaxs uhph djds gqadkjrsA vxj bZ'oj us mUgsa ok.kh nh gksrh rks >wjh ls iwNrs&rqe ge xjhcksa dks D;ksa fudky jgs gks  geus rks rqEgkjh lsok djus esa dksbZ dlj ugha mBk j[khA vxj bruh esgur ls dke u pyrk Fkk] vkSj dke ys ysrsA gesa rks rqEgkjh pkdjh esa ej tkuk dcwy FkkA geus dHkh nkus&pkjs dh f'kdk;r ugha dhA rqeus tks dqN f[kyk;k] og flj >qdkdj [kk fy;k] fQj rqeus gesa bl tkfye ds gkFk D;ksa csap fn;k  la/;k le; nksuksa cSy vius u, LFkku ij igq¡psA fnu&Hkj ds Hkw[ks Fks] ysfdu tc ukan esa yxk, x, rks ,d us Hkh mlesa eqag ugha MkykA fny Hkkjh gks jgk FkkA ftls mUgksaus viuk ?kj le> j[kk Fkk] og vkt muls NwV x;kA ;g u;k ?kj] u;k xkao] u, vkneh mUgsa csxkus&ls yxrs FksA nksuksa us viuh ewd Hkk\"kk esa lykg dh] ,d&nwljs dks duf[k;ksa ls ns[kk vkSj ysV x;sA tc xkao esa lksrk iM+ x;k rks nksuksa us tksj ekjdj ixgk rqM+k Mkys vkSj ?kj dh rjQ pysA ixgs cgqr etcwr FksA vuqeku u gks ldrk Fkk fd dksbZ cSy mUgsa rksM+ ldsxk] ij bu nksuksa esa bl le; nwuh 'kfä vk xbZ FkhA ,d&,d >Vds esa jfLl;k¡ VwV xbZaA >wjh çkr% dky lks dj mBk rks ns[kk fd nksuksa cSy pjuh ij [kM+s gSaA nksuksa dh xjnuksa esa vk/kk&vk/kk xjkao yVd jgk FkkA ?kqVus rd ikao dhpM+ ls Hkjs gSa vkSj nksuksa dh vka[kksa esa foæksge; Lusg >yd jgk gSA >wjh cSyksa dks ns[kdj Lusg ls xn~xn gks x;kA nkSM+dj mUgsa xys yxk fy;kA çsekfyaxu vkSj pqEcu dk og –'; cM+k gh euksgj FkkA ?kj vkSj xk¡o ds yM+ds tek gks x,A vkSj rkfy;k¡ ctk&ctkdj mudk Lokxr djus yxsA xkao ds bfrgkl esa ;g ?kVuk vHkwriwoZ u gksus ij Hkh egÙoiw.kZ Fkh] cky&lHkk us fu'p; fd;k] nksuksa i'kq&ohjksa dk vfHkuUnu i= nsuk pkfg,A dksbZ vius ?kj ls jksfV;ka yk;k] dksbZ xqM+] dksbZ pksdj] dksbZ HkwlhA,d ckyd us dgk& ^^,sls cSy fdlh ds ikl u gksaxsA** nwljs us leFkZu fd;k& ^^bruh nwj ls nksuksa vdsys pys vk,A *rhljk cksyk& ^cSy ugha gSa os] ml tUe ds vkneh gSaA";
            for (var s = 0; 1 != s;) {
                var e = Math.floor(10 * Math.random() + 1);
                e >= 0 && e <= 1 && (s = 1)
            }
            for (var d = k[e], r = "", a = (arr = d.split(" ")).length, l = 0; a > 0;) {
                a -= 9;
                for (var t = 0; t < 9; t++) r += "<span id='" + l + "' class='untyped'; border-radius:10%'>" + arr[l++] + "</span> ";
                r += "</br>"
            }
            document.getElementById("display_space").innerHTML = '<p id ="display" style="text-align:center; margin-left:1px; font-size:18 ; line-height:172%; font-family:hindi"> ' + r + " </p>", document.getElementById("time-elapsed").innerHTML = 600, $('input[type="text"], textarea').attr("readonly", !1), document.getElementById("typing_space").value = "", check = 0, time_left = 600, arr_pointer = 0, correct = 0, incorrect = 0, n = 0, keystrokes = 0, document.getElementById("time-elapsed").style.color = "#FF6F00", clearTimeout(stop)
        }

        function dealWithKeyboard(k) {
            if (32 == k.keyCode && time_left > 0) {
                var s = document.getElementById("typing_space"),
                    e = s.value;
                keystrokes += e.length, keystrokes++, $("#" + (n + 1)).addClass("focus"), $("#" + n).removeClass("focus"), 0 == e.trim().localeCompare(arr[arr_pointer]) ? (correct++, $("#" + n).removeClass("untyped").addClass("correct"), n++) : (incorrect++, $("#" + n).removeClass("untyped").addClass("incorrect"), n++), s.value = "", arr_pointer + 1 > 9 && (arr_pointer + 1) % 9 == 0 && scroll(), arr_pointer++
            }
        }

        function scroll() {
            var k = $("#display_space").scrollTop();
            $("#display_space").scrollTop(k + 48)
        }
        window.addEventListener("keydown", dealWithKeyboard, !1);
        var check = 0;
        $("#typing_space").keypress(function(k) {
            32 != k.keyCode && 1 != check && (check = 1, $("#0").addClass("focus"), timer(), $("#stoptest").show())
        }), $(document).on("ready", function() {});
