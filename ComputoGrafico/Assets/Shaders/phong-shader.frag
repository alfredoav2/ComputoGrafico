#version 330

in vec3 FragPos;
in vec3 Normal1;
out vec4 colour;
uniform sampler2D tex;
uniform sampler2D normalMap; 

vec3 ADSLightModel( in vec3 myNormal, in vec3 myPosition )
{
	const vec3 myLightPosition = vec3( 0.0 , 0.5, 0.0 );
	const vec3 myLightAmbient = vec3( 0.2, 0.2, 0.2 );
	const vec3 myLightDiffuse = vec3( 1.0 , 1.0 , 1.0 );
	const vec3 myLightSpecular = vec3( 1.0 , 1.0 , 1.0 );
	const vec3 myMaterialAmbient = vec3( 1.0 , 0.5, 0.0 );
	const vec3 myMaterialDiffuse = vec3( 1.0 , 0.5, 0.0 );
	const vec3 myMaterialSpecular = vec3( 0.6, 0.6, 0.6 );
	const float myMaterialShininess = 10.1f;
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

	vec4 finalColour = vec4(ADSLightModel(Normal1,FragPos),1.0f);
	//vec4 finalColour = vec4(ADSLightModel(Normal1,FragPos),1.0f);
	
	colour =  finalColour;
}