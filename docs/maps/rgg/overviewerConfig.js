var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "maxZoom": 8,
            "minZoom": 0,
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
            "last_rendertime": 1595112979,
            "name": "Daytime Render",
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "path": "day",
            "world": "world",
            "isOverlay": false,
            "poititle": "Markers",
            "zoomLevels": 8,
            "north_direction": 0,
            "base": "",
            "showlocationmarker": true
        }
    ],
    "map": {
        "controls": {
            "mapType": true,
            "overlays": true,
            "compass": true,
            "zoom": true,
            "pan": true,
            "spawn": true,
            "coordsBox": true
        },
        "cacheTag": "1595113358",
        "debug": true,
        "north_direction": "lower-left"
    }
};
