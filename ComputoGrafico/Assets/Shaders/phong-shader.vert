#version 330

layout (location = 0) in vec3 pos;
layout (location = 1) in vec2 tex;
layout (location = 2) in vec3 norm;
layout (location = 3) in vec3 tangent;

out vec3 FragPos;
out vec2 TexCoord;
out mat3 TBN;
out vec3 norm1;

uniform mat4 model;
uniform mat4 projection;
uniform mat4 view;
mat3 TBN;

void main()
{
	gl_Position = projection * view * model * vec4(pos, 1.0);
<<<<<<< HEAD
<<<<<<< HEAD
	TexCoord = tex;
	
	vec3 T = normalize(vec3(model * vec4(tangent, 0.0)));
	vec3 N = normalize(vec3(model * vec4(norm, 0.0)));
	T = normalize(T - dot(T, N) * N);
	vec3 B = cross(N, T);
	TBN = mat3(T, B, norm);
	norm1 = norm;
=======
=======
>>>>>>> e5d59482f5e9fc223dbf5afd40f8c2f2d45ea842
//	vec3 T = normalize(vec3(model * vec4(tangent, 0.0)));
//	vec3 N = normalize(vec3(model * vec4(norm, 0.0)));	
//	T = normalize (T-dot(T,N)*N);
//	vec3 B = cross(N,T);
//	TBN = mat3(T,B,norm);
	Normal1 = norm;
>>>>>>> l
	FragPos = (model * vec4(pos, 1.0)).xyz; 
}
