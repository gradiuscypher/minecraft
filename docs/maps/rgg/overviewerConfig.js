var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "defaultZoom": 1,
            "showlocationmarker": true,
            "imgextension": "png",
            "isOverlay": false,
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "path": "day",
            "name": "Daytime Render",
            "zoomLevels": 8,
            "maxZoom": 8,
            "bgcolor": "#1a1a1a",
            "world": "world",
            "last_rendertime": 1596207379,
            "poititle": "Markers"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "pan": true,
            "spawn": true,
            "overlays": true,
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true
        },
        "cacheTag": "1596207761",
        "debug": true,
        "north_direction": "lower-left"
    }
};
