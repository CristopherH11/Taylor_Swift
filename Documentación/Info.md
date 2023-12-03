**Pérdida de entrenamiento a lo largo de las épocas:**
- *Eje Y (Vertical):* Representa el valor de la función de pérdida. La función de pérdida mide qué tan bien está desempeñándose el modelo. Durante el entrenamiento, el objetivo es minimizar este valor.
- *Eje X (Horizontal):* Representa el número de épocas de entrenamiento. Una época es un pase completo a través de todo el conjunto de datos de entrenamiento.
- *Significado:* Una tendencia decreciente en la pérdida de entrenamiento a lo largo de las épocas indica que el modelo está aprendiendo y mejorando su rendimiento en los datos de entrenamiento. La pérdida representa la discrepancia entre las predicciones del modelo y los valores reales objetivo. Osea, valores más bajos son mejores, pero es importante vigilar signos de sobreajuste (overfitting).

**Precisión de entrenamiento a lo largo de las épocas:**
- *Eje Y (Vertical):* Representa la precisión de entrenamiento, que es una medida de cuántas predicciones acertó el modelo durante el entrenamiento.
- *Eje X (Horizontal):* Representa el número de épocas de entrenamiento.
- *Significado:* Una tendencia creciente en la precisión de entrenamiento indica que el modelo se está volviendo más preciso en la predicción de los datos de entrenamiento. Sin embargo, una alta precisión de entrenamiento no garantiza un buen rendimiento en datos nuevos y no vistos (podría estar sobreajustándose/overfitting). Es crucial monitorear tanto la pérdida como la precisión para evaluar el rendimiento general del modelo.

_________________________________________________________________

**RESUMEN DEL MODELO:** 

Model: "sequential_1"

 Layer (type)                Output Shape              Param #   
=================================================================
 embedding_1 (Embedding)     (1, None, 256)            18688     
                                                                 
 gru_1 (GRU)                 (1, None, 1024)           3938304   
                                                                 
 dense_1 (Dense)             (1, None, 73)             74825     
                                                                 
=================================================================
Total params: 4031817 (15.38 MB)
Trainable params: 4031817 (15.38 MB)
Non-trainable params: 0 (0.00 Byte)
_________________________________________________________________


*Tipo:* Este modelo es [secuencial](https://www.themachinelearners.com/modelos-secuencia/#%C2%BFA_que_nos_referimos_con_secuencia) (Significa que consiste en una pila lineal de capas, donde la salida de una capa se convierte en la entrada de la siguiente.)

