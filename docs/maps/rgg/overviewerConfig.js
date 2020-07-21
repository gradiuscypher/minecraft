var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "isOverlay": false,
            "imgextension": "png",
            "base": "",
            "showlocationmarker": true,
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "north_direction": 0,
            "name": "Daytime Render",
            "last_rendertime": 1595346979,
            "world": "world",
            "maxZoom": 8,
            "path": "day",
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "defaultZoom": 1
        }
    ],
    "map": {
        "cacheTag": "1595347363",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "mapType": true,
            "coordsBox": true,
            "overlays": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "zoom": true
        }
    }
};
