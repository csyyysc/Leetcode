class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        collides = []

        for asteroid in asteroids:
            while True:
                if len(collides) == 0 or asteroid > 0 or collides[-1] < 0:
                    collides.append(asteroid)
                    break
                elif collides[-1] > 0:
                    if collides[-1] < -asteroid:
                        collides.pop()
                        continue
                    elif collides[-1] == -asteroid:
                        collides.pop()
                    break
                else:
                    collides.append(asteroid)
                    break

        return collides