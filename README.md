# calculadora-eletrica
Este projeto é um **script em JavaScript** que calcula o **consumo mensal de energia elétrica de um eletrodoméstico** e estima o **valor mensal da conta**, com base no tempo de uso diário.
# 🔌 Calculadora de Consumo de Energia


O usuário informa:
- Nome do aparelho
- Unidade de potência (**Watt ou Quilowatt**)
- Potência do aparelho
- Tempo de uso diário

O programa então calcula:
- **Consumo mensal em kWh**
- **Custo mensal estimado em reais**

O cálculo considera **30 dias de uso** e um **valor de R$0,90 por kWh**.

---

## ⚙️ Tecnologias utilizadas

- **JavaScript**
- Entrada de dados com `prompt`
- Saída de dados com `console.log`

---

## 📋 Como funciona

1. O usuário informa o nome do aparelho.  
2. Escolhe a unidade de potência:
   - `1` → Watt  
   - `2` → Quilowatt  
3. Informa:
   - Potência do aparelho
   - Tempo de uso diário (em horas)
4. O programa calcula:
   - Consumo mensal em **kWh**
   - Valor mensal aproximado da energia.

---

## 🧮 Fórmula utilizada

### Quando a potência está em **Watt**

\[
kWh = \frac{Potência(W) \times Horas}{1000} \times 30
\]

### Quando a potência está em **Quilowatt**

\[
kWh = Potência(kW) \times Horas \times 30
\]

### Cálculo do custo

\[
Valor = kWh \times 0.9
\]

---

## ▶️ Exemplo de uso

Insira o seu aparelho: Geladeira  

Escolha a medida da potência do seu aparelho:  
1 - Watt  
2 - Quilowatt  

1  

Insira a potência em Watt do seu aparelho: 150  

Insira o tempo de uso diário do seu aparelho: 24  

---

## 💻 Saída no console

Eletrodoméstico: Geladeira  
kWh por mês: 108.00  
Valor mensal: 97.20 reais  

---

## 📌 Observação

O valor de **R$0,90 por kWh** é apenas uma **estimativa** e pode variar dependendo da região e da concessionária de energia.