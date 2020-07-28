var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "image": {
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384
    },
    "map": {
        "controls": {
            "pan": true,
            "coordsBox": true,
            "spawn": true,
            "zoom": true,
            "overlays": true,
            "compass": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1595966564",
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "maxZoom": 8,
            "isOverlay": false,
            "north_direction": 0,
            "world": "world",
            "name": "Daytime Render",
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "defaultZoom": 1,
            "minZoom": 0,
            "imgextension": "png",
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1595966179,
            "base": "",
            "path": "day"
        }
    ],
    "worlds": [
        "world"
    ]
};
