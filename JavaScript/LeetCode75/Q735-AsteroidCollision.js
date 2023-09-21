/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stars = [];

    for(let i = 0; i < asteroids.length; i++) {
        const a = asteroids[i];
        if((stars.length === 0 || stars[stars.length - 1] < 0) && a < 0)  {
            stars.push(a);
        } else if(a > 0) {
            stars.push(a);
        } else {
            const star = stars.pop();
            
            if(Math.abs(star) > Math.abs(a)) {
                stars.push(star);
            } else if(Math.abs(star) < Math.abs(a)) {
                i--;
            } else {
                continue;
            }
        }
    }
    return stars;
};
