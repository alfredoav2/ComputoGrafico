#version 330

in vec2 TexCoord;
in vec3 FragPos;
out vec4 colour;
<<<<<<< HEAD
<<<<<<< HEAD
in mat3 TBN;	
in vec3 norm1;
uniform sampler2D tex;
uniform sampler2D normalMap;  
=======
uniform sampler2D tex;
uniform sampler2D normalMap; 
>>>>>>> l
=======
uniform sampler2D tex;
uniform sampler2D normalMap; 
>>>>>>> e5d59482f5e9fc223dbf5afd40f8c2f2d45ea842

vec3 ADSLightModel( in vec3 myNormal, in vec3 myPosition )
{
	const vec3 myLightPosition = vec3( 0.0 , 0.0, -10.0 );
	const vec3 myLightAmbient = vec3( 0.42, 0.42, 0.42 );
	const vec3 myLightDiffuse = vec3( 1.0 , 1.0 , 1.0 );
	const vec3 myLightSpecular = vec3( 1.0 , 1.0 , 1.0 );
	const vec3 myMaterialAmbient = vec3( 0.5 , 0.5, 0.5 );
	const vec3 myMaterialDiffuse = vec3( 0.5 , 0.5, 0.5 );
	const vec3 myMaterialSpecular = vec3( 0.92, 0.92, 0.92 );
	const float myMaterialShininess = 0.01;
	//normal, light, view, and light reflection vectors
	vec3 norm = normalize( myNormal );
	vec3 lightv = normalize( myLightPosition - myPosition);
	vec3 viewv = normalize( vec3(0.,0.,0.) - myPosition );
	vec3 refl = reflect( vec3(0.,0.,0.) - lightv, norm );
	//ambient light computation
	vec3 ambient = myMaterialAmbient*myLightAmbient;
	//diffuse light computation
	vec3 diffuse = max(0.0, dot(lightv, norm)) * myMaterialDiffuse *myLightDiffuse;
	//Optionally you can add a diffuse attenuation term at this
	//point
	//specular light computation
	vec3 specular = vec3( 0.0, 0.0, 0.0 );
	if( dot(lightv, viewv) > 0.0)
	{
	 specular = pow(max(0.0, dot(viewv,refl)), myMaterialShininess)*myMaterialSpecular*	myLightSpecular;
	}
	return clamp( ambient + diffuse + specular, 0.0, 1.0);
}

void main()
{
//	vec3 Normal = texture(normalMap, TextCoord ).rgb;
//	Normal = normalize(Normal*2-1);
//	Normal = normalize(TBN*Normal);
<<<<<<< HEAD

<<<<<<< HEAD
    vec3 Normal = texture(normalMap, TexCoord).rgb;
    Normal = normalize(Normal*2-1);  
	Normal = normalize(TBN * Normal); 
=======
>>>>>>> e5d59482f5e9fc223dbf5afd40f8c2f2d45ea842

	vec4 finalColour = vec4(ADSLightModel(Normal,FragPos),1.0f);
=======
	vec4 finalColour = vec4(ADSLightModel(Normal1,FragPos),1.0f);
	//vec4 finalColour = vec4(ADSLightModel(Normal1,FragPos),1.0f);
<<<<<<< HEAD
>>>>>>> l
=======
>>>>>>> e5d59482f5e9fc223dbf5afd40f8c2f2d45ea842
	
	colour =  texture(tex, TexCoord)*finalColour;
}