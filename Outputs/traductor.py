import tensorflow as tf
import tensorflowjs as tfjs

# Carga el modelo TensorFlow.
model = tf.keras.models.load_model('Entrada')
model.compile()

# Convierte el modelo a JavaScript.
tfjs.converters.save_keras_model(model, 'Salida')