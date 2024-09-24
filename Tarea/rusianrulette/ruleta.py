import pyautogui
import random
import os
import time

def choose_random_number():
    return random.randint(1, 6)

def main():
    print("El programa está en ejecución. Mueve el mouse para evitar que te 'toque' el objeto.")
    
    try:
        while True:
            # Obtén la posición actual del mouse
            x, y = pyautogui.position()
            
            # Escoge un número aleatorio entre 1 y 6
            number = choose_random_number()
            
            # Imprime el resultado en la consola
            if number == 3:
                print("¡Perdiste!")
                print("Reiniciando el PC...")
                os.system("shutdown /r /t 0")  # Para Windows
                # os.system("sudo reboot")  # Para Linux/Mac
                break
            else:
                print(f"¡Ganaste! El número es {number}.")
            
            # Espera 1 segundo antes de la siguiente iteración
            time.sleep(1)

    except KeyboardInterrupt:
        print("Programa terminado por el usuario.")

if __name__ == "__main__":
    main()
