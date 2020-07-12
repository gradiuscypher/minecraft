var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true,
            "spawn": true,
            "pan": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1594555686"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "world": "world",
            "name": "Daytime Render",
            "zoomLevels": 8,
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "north_direction": 0,
            "defaultZoom": 1,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "showlocationmarker": true,
            "isOverlay": false,
            "maxZoom": 8,
            "last_rendertime": 1594522323
        }
    ]
};
