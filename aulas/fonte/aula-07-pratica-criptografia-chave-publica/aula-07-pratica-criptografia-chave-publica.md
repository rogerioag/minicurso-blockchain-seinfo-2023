---
title: "Aula 007 - Prática sobre Criptografia Assimétrica"
subtitle: ""
date: 
abstract: "Nessa aula o objetivo é compreender alguns algoritmos de _Criptografia Assimétrica_, através da execução de exemplos com OpenSSL."
nocite: |
  [@178948620180101]
---

# Criptografia Assimétrica ou Criptografia de Chave Pública

_Criptografia Assimétrica_ se refere ao tipo de Criptografia onde a chave que é utilizada para encriptar os dados é diferente da chave que é usada para decriptar os dados criptografados. Esse tipo de Criptografia é conhecido também como __Criptografia de Chave Pública__, onde são usadas uma chave pública para encriptar os dados e uma chave privada para decriptar. Existem diversos esquemas de criptografia assimétrica que estão em uso, incluindo `RSA`, `DSA` e `ElGammal`.

# Leitura do Capítulo 4: Criptografia de Chave Pública

1. Faça a leitura do [Capítulo 4: Criptografia de Chave Pública](https://moodle.utfpr.edu.br/mod/resource/view.php?id=1295145).
2. Execute os exemplos com `openssl` via linha de comando.
3. Crie uma chave privada, uma chave pública e faça o processo de encriptação/decriptação do conteúdo de um arquivo com os algoritmso `RSA`, algum algoritmo de `ECC` e com assinatura digital.
4. Faça um relatório simples sobre a execução e os resultados obtidos.

<!--
[terminal]
[rag@nitro-ryzen aula]$ openssl genpkey -algorithm RSA -out privatekey.pem -pkeyopt rsa_keygen_bits:1024
[/terminal]
-->

\normalsize

## Referências {.fragile .allowframebreaks}