var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "map": {
        "cacheTag": "1594263856",
        "debug": true,
        "controls": {
            "compass": true,
            "mapType": true,
            "spawn": true,
            "zoom": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true
        },
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "isOverlay": false,
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "north_direction": 0,
            "last_rendertime": 1594263380,
            "minZoom": 0,
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "maxZoom": 8,
            "imgextension": "png",
            "world": "world",
            "name": "Daytime Render",
            "defaultZoom": 1,
            "path": "day",
            "bgcolor": "#1a1a1a"
        }
    ],
    "worlds": [
        "world"
    ]
};
