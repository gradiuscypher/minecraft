var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png"
        }
    },
    "map": {
        "debug": true,
        "cacheTag": "1594587989",
        "controls": {
            "compass": true,
            "pan": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true,
            "spawn": true,
            "mapType": true
        },
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "maxZoom": 8,
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "defaultZoom": 1,
            "world": "world",
            "showlocationmarker": true,
            "north_direction": 0,
            "last_rendertime": 1594522323,
            "name": "Daytime Render",
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "base": "",
            "isOverlay": false
        }
    ],
    "worlds": [
        "world"
    ]
};
