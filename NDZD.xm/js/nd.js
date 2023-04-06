window.onload = function(){
    let dj1 = document.querySelector('.dj1')
    let dj2 = document.querySelector('.dj2')
    let dj3 = document.querySelector('.dj3')
    let dj4 = document.querySelector('.dj4')
    let xn = document.querySelector('.xn')
    let lu = document.querySelectorAll('.lu')
    let zjxs = document.querySelectorAll('.zjxs')
    
    let one = document.querySelector('.tzdj1')
    let two = document.querySelector('.tzdj2')
    let three = document.querySelector('.tzdj3')

    let ss1 = document.querySelector('.lu23')
    let ss2 = document.querySelector('.lu24')
    let ss3 = document.querySelector('.lu26')
    let ts1 = document.querySelector('.tb1')
    let ts2 = document.querySelector('.tb2')
    let ts3 = document.querySelector('.tb3')

    let wz1 = document.querySelector('.wz1')
    let wz2 = document.querySelector('.wz2')
    let wz3 = document.querySelector('.wz3')
    let wz4 = document.querySelector('.wz4')

    let body = document.querySelector('body')
    let box = document.querySelector('.box')
    let xjs = document.querySelectorAll('.xj')
    let fg = document.querySelector('.lu22')
    let zz1 = document.querySelector('.zz1')

    let df1 = document.querySelector('.df1')
    let df2 = document.querySelector('.df2')
    let df3 = document.querySelector('.df3')
    let hm2 = document.querySelector('.hm2')

    let hxs = document.querySelector('.hxs')
    let xq3 = document.querySelector('.xq3')
    let loyd = document.querySelector('.loyd')
    box.style.display = 'none'

    let yy1 = document.querySelector('.yy1')
    let yy2 = document.querySelector('.yy2')
    let yy3 = document.querySelector('.yy3')
    let yy4 = document.querySelector('.yy4')
    let fxs =0;
    function fz(x){//鸽子方向函数
        let i= 1;
        fxs = setInterval(()=>{
            if (i > 5) i = 1
            xn.setAttribute('src',`../images/ggimg/gz${x}${i}.png`)
            i++
        },145)
    }
    const sdu = 0.88
    const sdy = 0.8
    yy2.playbackRate = sdy;
    yy4.playbackRate = sdu;
    let falg = true;
    // setTimeout(()=>{//初始光圈显示
    //     dj1.style.display = 'block'
    //     wz1.style.display = 'block'
    //     loyd.style.display = 'none'
    // },8000)
    dj1.addEventListener('click',function(){//第一个光圈点击事件  
        yy4.getAttribute('preload') == 'metadata'
        yy4.play()
        dj1.style.display = 'none'
        one.setAttribute('kg','1')
        setTimeout(()=>{
            wz2.style.display = 'block'//第二个文字显示
            wz1.style.display = 'none'//第一个文字隐藏
            ss1.classList.add('ss1')//电话柱子
            ts1.classList.add('ss1')//电话图片
            setTimeout(()=>{//电话图片运动动画
                ts1.setAttribute('class','tb1 sx1')
            },1500)
        },8500)
        setTimeout(()=>{
            one.style.display = 'block'//第一个点跳转显示
            dj2.style.display = 'block'//第二个光圈显示
        },14100)
        if(falg){
            falg = false
            xn.setAttribute('class','xn gg1')//鸽子运动动画
            xn.setAttribute('src',`../images/ggimg/gz${0}${4}.png`)
            fz(0)
            setTimeout(()=>{//鸽子转向定时器
                clearInterval(fxs)
                fz(1)
                setTimeout(()=>{
                    clearInterval(fxs)
                    fz(0)
                    setTimeout(()=>{
                        clearInterval(fxs)
                        fz(1)
                        setTimeout(()=>{
                            clearInterval(fxs)
                            xn.setAttribute('src',`../images/ggimg/gz${1}${1}.png`)
                            falg = true
                            yy4.pause()
                            yy4.getAttribute('perload') == 'none'
                        },1880);
                    },3215)
                },1189)
            },1855)
        }
        setTimeout(()=>{//第二段柱子上升动画
            yy2.getAttribute('preload') == 'metadata'
            yy2.play()
            xxx =7
            zz = setInterval(()=>{
                lu[xxx].classList.add('dh')
                zuing = xxx
                lu[xxx].style.display = 'block'
                xxx++
                if (zuing == 11) clearInterval(zz)
            },400)
        },10000)
        setTimeout(()=>{
            yy2.pause()
            yy2.getAttribute('preload') == 'none'
        },14000)
    },true)
    dj2.addEventListener('click',function(){
        yy4.getAttribute('preload') == 'metadata'
        yy4.play()//鸽子音乐
        dj2.style.display = 'none'//第二个光圈隐藏
        one.style.display = 'none'//第一个跳转隐藏
        two.setAttribute('kg','1')//跳转开关
        setTimeout(()=>{
            wz3.style.display = 'block'//第三个文字显示
            wz2.style.display = 'none'//第二个文字隐藏
            ss2.classList.add('ss2')//wifi柱子
            ts2.classList.add('ss2')//wifi图标
            setTimeout(()=>{//wifi图标动画
                ts2.setAttribute('class','tb2 sx1')
            },1500)
        },5500)
        setTimeout(()=>{
            dj3.style.display = 'block'//第三个光圈显示
            one.style.display = 'block'//第一个跳转显示
            two.style.display = 'block'//第二个跳转显示
        },11500)
        if(falg){//鸽子第二段路运动方向
            falg = false
            xn.setAttribute('class','xn gg2')//鸽子第二段路运动
            xn.setAttribute('src',`../images/ggimg/gz${1}${1}.png`)
            fz(0)
            setTimeout(()=>{
                clearInterval(fxs)
                fz(1)
                setTimeout(()=>{
                    clearInterval(fxs)
                    xn.setAttribute('src',`../images/ggimg/gz${1}${1}.png`)
                    falg = true
                    yy4.pause()
                    yy4.getAttribute('preload') == 'none'
                },4056)
            },717)
        }
        setTimeout(()=>{//第三段柱子显示
            yy2.getAttribute('preload') == 'metadata'
            yy2.play()
            xxx = 12
            zz = setInterval(()=>{
                lu[xxx].classList.add('dh')
                zuing = xxx
                console.log(xxx)
                lu[xxx].style.display = 'block'
                xxx++
                if (zuing == 16) clearInterval(zz)
            },400)
        },7500)
        setTimeout(()=>{
            yy2.getAttribute('preload') == 'none'
            yy2.pause()
        },11000)
    },true)
    dj3.addEventListener('click',function(){
        yy4.getAttribute('preload') == 'metadata'
        yy4.play()
        dj3.style.display = 'none'//第三个光圈隐藏
        one.style.display = 'none'//第一个跳转隐藏
        two.style.display = 'none'//二个跳转隐藏
        three.setAttribute('kg','1')
        setTimeout(()=>{
             wz4.style.display = 'block'//第四个文字显示
            wz3.style.display = 'none'//第三个文字隐藏
            ss3.classList.add('ss3')//金币柱子
            ts3.classList.add('ss3')//金币图标
            setTimeout(()=>{//金币图标动画
                ts3.setAttribute('class','tb3 sx1')
            },1500)
        },5600)
        setTimeout(()=>{
            dj4.style.display = 'block'//第四个光圈显示
            one.style.display = 'block'//第一个跳转显示
            two.style.display = 'block'//第二个跳转显示
            three.style.display = 'block'//第三个跳转显示
        },10500)
        if(falg){
            falg = false
            xn.setAttribute('class','xn gg3')//第三段路移动动画
            xn.setAttribute('src',`../images/ggimg/gz${1}${1}.png`)
            fz(2)
            setTimeout(()=>{//第三段鸽子方向
                clearInterval(fxs)
                fz(3)
                setTimeout(()=>{
                    clearInterval(fxs)
                    fz(2)
                    setTimeout(()=>{
                        clearInterval(fxs)
                        xn.setAttribute('src',`../images/ggimg/gz${2}${1}.png`)
                        falg = true
                        yy4.pause()
                        yy4.getAttribute('preload') == 'none'
                    },2045)
                },1303)
            },1638)
        }
        setTimeout(()=>{//第四段柱子显示
            yy2.getAttribute('preload') == 'metadata'
            yy2.play()
            xxx = 17
            zz = setInterval(()=>{
                lu[xxx].classList.add('dh')
                zuing = xxx
                console.log(xxx)
                lu[xxx].style.display = 'block'
                xxx++
                if (zuing == 20) clearInterval(zz)
            },400)
        },7000)
        setTimeout(()=>{
            yy2.pause()
            yy2.getAttribute('preload') == 'none'
        },10000)
    },true)
    let xn2 = document.querySelector('.xn2')
    dj4.addEventListener('click',function(){
        yy4.getAttribute('preload') == 'metadata'
        yy4.play()
        dj4.style.display = 'none'//第四个光圈隐藏
        one.style.display = 'none'//第一个跳转隐藏
        two.style.display = 'none'//第二个跳转隐藏
        three.style.display = 'none'//第三个跳转隐藏
        setTimeout(()=>{
            df1.classList.add('xz1')//左边星球动画显示
            df2.classList.add('xz3')//右边星球动画显示
            df3.classList.add('xz2')//中间星球动画显示
            hm2.classList.add('xz4')//中间星球号码动画显示
            xn2.classList.add('xz4')//中间鸽子显示
            hxs.style.display = 'block'//上升后文字显示
        },8500)
        setTimeout(()=>{
            yy3.play()
            body.setAttribute('class','qf')//背景上升
            for(var vv = 0;vv<xjs.length;vv++){//路下降
                xjs[vv].classList.add('ss')
            }
            setTimeout(()=>{//上升时鸽子方向改变
                xn.setAttribute('src',`../images/ggimg/gz${3}${1}.png`)
                fg.setAttribute('class','lu22 lu ff')//路上升
                xn.classList.add('ggf')//鸽子上升
                zz1.style.display = 'none'//文字隐藏
            })
        },4000)
        if(falg){
            falg = false
            xn.setAttribute('class','xn gg4')//第四段鸽子移动动画
            xn.setAttribute('src',`../images/ggimg/gz${2}${1}.png`)
            fz(3)
            setTimeout(()=>{//第四段鸽子方向
                clearInterval(fxs)
                fz(3)
                setTimeout(()=>{
                    clearInterval(fxs)
                    fz(0)
                    setTimeout(()=>{
                        clearInterval(fxs)
                        xn.setAttribute('src',`../images/ggimg/gz${0}${1}.png`)
                        falg = true
                        yy4.pause()
                        yy4.getAttribute('preload') == 'none'
                    },1126)
                },1159)
            },1158)
        }
    },true)
    let xxx = 0;
    let zz = 0;
    function fxx (zuing){//第一段路上升动画
        zz = setInterval(()=>{
            yy2.play()
            lu[xxx].classList.add('dh')
            zuing = xxx
            lu[xxx].style.display = 'block'
            xxx++
            if (zuing == 6) clearInterval(zz)
        },400)
        loyd.style.display = 'none'
        wz1.style.display = 'block'//第一个文字显示
    }
    one.addEventListener('click',function(){//第一个跳转
        if(one.getAttribute('kg') == 1){
            xn.setAttribute('class','xn one')
            wz1.style.display = 'none'
            wz2.style.display = 'block'
            wz3.style.display = 'none'
            wz4.style.display = 'none'
        }
    })
    two.addEventListener('click',function(){//第二个跳转
        if(two.getAttribute('kg') == 1){
            xn.setAttribute('class','xn two')
            wz1.style.display = 'none'
            wz2.style.display = 'none'
            wz3.style.display = 'block'
            wz4.style.display = 'none'
        }
    })
    three.addEventListener('click',function(){//第三个跳转
        if(three.getAttribute('kg') == 1){
            xn.setAttribute('class','xn three')
            wz1.style.display = 'none'
            wz2.style.display = 'none'
            wz3.style.display = 'none'
            wz4.style.display = 'block'
        }
    })
    //滑动
    let bfb = document.querySelector('.bfb')
    bfb.onclick = function(){
        setTimeout(()=>{
            fxx()
        },3000)
        setTimeout(()=>{
            yy2.pause()
        },7000)
        setTimeout(()=>{//初始四个柱子动画
            zjxs[0].classList.add('x1')
            zjxs[1].classList.add('x3')
            zjxs[2].classList.add('x1')
            zjxs[3].classList.add('x2')
        },1000)
        box.style.display = 'block'
        bfb.style.display = 'none'
        setTimeout(()=>{//初始光圈显示
            dj1.style.display = 'block'
            wz1.style.display = 'block'
        },8000)
    }
}