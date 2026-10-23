# 学习资料与模型说明

本站学习导览、讲解示例和交互代码为本项目编写。以下为延伸阅读和模型核对资料，不表示与原作者存在合作关系。

- 高数上：OpenStax Calculus Volume 1，https://openstax.org/books/calculus-volume-1/pages/1-introduction
- 高数下：OpenStax Calculus Volume 3，https://openstax.org/books/calculus-volume-3/pages/1-introduction
- 复变函数：MIT OCW 18.04，https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/
- 概率论：MIT OCW 18.05，https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/
- 模电：MIT OCW 6.002，https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/
- 数电：MIT OCW 6.004，https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/
- 电路交互参考：Falstad，https://www.falstad.com/circuit/ 。本站未复制或嵌入其代码或界面。

三维曲面使用原生 Canvas 绘制三维旋转后的正交投影。高数实验为 x² 的切线、割线与右端点矩形和。复映射支持 z² 和 eᶻ。概率实验采用正态密度及累计概率数值近似。

RC 为理想一阶串联模型，充电初值 0 V，放电初值 V；切换开关为独立实验，不保持上一次实验状态。播放将 1 秒响应以约 5 秒慢放展示。没有任意接线、寄生参数或器件非线性求解。逻辑电路采用理想二值模型，包含 AND、OR、XOR、NAND 与一位全加器，不含传播延迟。

内容是起步学习导览，章节分配可能与学校教材不同。手动标记的阅读进度只保存在当前浏览器。

## 专项实验参考

- TI NE555 数据手册（定时器阈值、单稳态及无稳态）：https://www.ti.com/lit/ds/symlink/ne555.pdf
- TI SN74LS00 数据手册（TTL 输入电平范围）：https://www.ti.com/lit/ds/symlink/sn74ls00.pdf
- OpenStax 格林公式：https://openstax.org/books/calculus-volume-3/pages/6-4-greens-theorem

新增三种 BJT 组态、多级、差分、达林顿、耦合、反馈、运算电路、TTL、时序、单稳态、555、DA/AD、梯度、二重积分与环路积分。每页分别标明适用模型与单位。器件端口或信号框图不表示可直接制作的完整偏置电路；任意接线和 SPICE 求解仍未接入。三极管用低频模型，反馈用稳定单极点近似，TTL 未定义输入显示 X，转换器使用截断量化及 Vref/2^n 的 LSB 约定。
