var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "image": {
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "world": "world",
            "poititle": "Markers",
            "name": "Daytime Render",
            "maxZoom": 8,
            "showlocationmarker": true,
            "isOverlay": false,
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "base": "",
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1598669779,
            "defaultZoom": 1,
            "minZoom": 0
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1598670169",
        "controls": {
            "compass": true,
            "pan": true,
            "zoom": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "overlays": true
        },
        "debug": true
    }
};
