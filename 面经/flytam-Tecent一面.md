- 腾讯
    - 3.16 一面 (45分钟)
    - 问题
        - 描述下原型链
        - js作用域
        - 闭包
        - 垃圾回收
        - 如何读取对象属性不在原型链上找
        - cookie一些属性
        - 浏览器缓存
        - http和https协议
        - 同源策略、跨域解决办法
        - web安全XSS
        - reflow和repaint
        - CSRF怎样产生、如何防范。具体转义哪些字符为什么
        - 你觉得的自己优点和缺点
        - 平时怎么学前端
    -   一个小时后的电话（25分钟）
        - 讲项目和遇到的难点问了下一些相关
        - imutable.js实现原理
        - Promise解决了什么问题、如何使用ES5实现

    - 3.19在线写代码
        - 题目一：页面内的一个input输入框，实现查询命中数组中的词，和输入过程中的autocomplete效果
        - 题目二：实现一个div滑动的动画，由快至慢5s结束
        - 现场写的代码
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            *{
                margin: 0;
                padding: 0;
            }
            #input{
                width:200px;
            }
            #tips{
                width:200px;
                border: 1px solid black;
            }
            .none{
                display: none
            }
            p {
                cursor: pointer;
            }
            p + p {
                border-top: 1px solid black;
            }
        </style>
    </head>
    <body>
        <input id="input"/>
        <div id='tips' class='none'>

        </div>
        <script>
            const arr = ['a搜索引擎','a搜索鸟','a搜索神器','搜索引擎大全']
            const input = document.querySelector('#input')
            const tips = document.querySelector('#tips')
            // input.addEventListener('input',(e) =>{
            //     tips.classList.add('none')
            //     console.log(e.target.value)
            //     tips.innerHTML = '';
            //     const value = e.target.value
            //     //const reg = new RegExp(value)
            //     arr.forEach(item =>{
            //         if (value.length >0 && item.indexOf(value) > -1){
            //             console.log(item)
            //             // const pcontent = document.createElement('p').innerText = item
            //             tips.innerHTML += `<p>${item}</p>`
            //         }
            //     })
            //     if (value.length >0){
            //         tips.classList.remove('none')
            //     }
                
            // })

            input.addEventListener('keyup',(e) =>{
                console.log(e.target.value,e)
                tips.classList.add('none')
                
                tips.innerHTML = '';
                const value = e.target.value
                arr.forEach(item =>{
                    if (value.length >0 && item.indexOf(value) > -1){
                        console.log(item)
                        // const pcontent = document.createElement('p').innerText = item
                        tips.innerHTML += `<p>${item}</p>`
                    }
                })
                if (value.length >0){
                    tips.classList.remove('none')
                }
                
            })
            input.addEventListener('click',(e) =>{
                e.stopPropagation()
            })
            tips.addEventListener('click',(e) =>{
                // console.log(e.target.innerText)
                input.value = e.target.innerText
                tips.classList.add('none')
                e.stopPropagation();
            })
            document.addEventListener('click',() =>{
                tips.classList.add('none')
            })
        </script>
    </body>
</html>
```
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            .box{
                width: 200px;
                height: 200px;
                background-color: yellow;
                position: absolute;
                
                /* animation: 5s ease-out; */
                animation-duration: 5s;
                animation-name: boxGo;
                animation-timing-function: ease-out;
                animation-play-state: paused;
                animation-fill-mode: forwards;
            }
            @keyframes boxGo {
                from {
                    top:0px;
                    left:0px;
                }
                to {
                    top:200px;
                    left:200px;
                }
            }
            .button{
                margin-top: 300px;
            }
        </style>
    </head>
    <body>
    <div class="box"></div>
    <button class="button">动画开始</button>
    <script>
        const box = document.querySelector('.box')
        const button = document.querySelector('.button')
        button.addEventListener('click',()=>{
            boxGo()
        })
        function boxGo(e){
            console.log(1)
            box.style.animationPlayState = 'running'
        }
    </script>
    </body>
</html>
```