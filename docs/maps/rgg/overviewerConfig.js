var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "name": "Daytime Render",
            "maxZoom": 8,
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "base": "",
            "poititle": "Markers",
            "imgextension": "png",
            "path": "day",
            "last_rendertime": 1594842979,
            "isOverlay": false,
            "minZoom": 0,
            "world": "world",
            "north_direction": 0,
            "defaultZoom": 1,
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1594843370",
        "controls": {
            "zoom": true,
            "compass": true,
            "overlays": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true
        }
    }
};
